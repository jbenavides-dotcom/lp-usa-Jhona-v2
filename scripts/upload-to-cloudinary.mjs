import { v2 as cloudinary } from 'cloudinary';
import { readdirSync, statSync, writeFileSync } from 'fs';
import { join, relative, parse } from 'path';

cloudinary.config({
  cloud_name: 'dkqocgknd',
  api_key: '185543519169835',
  api_secret: 'yWL1oiZeM5IkvdDlD4JuX6llrZ0',
});

const IMAGES_DIR = join(process.cwd(), 'public', 'images');
const EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

function getAllImages(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...getAllImages(full));
    } else {
      const ext = parse(full).ext.toLowerCase();
      if (EXTENSIONS.has(ext)) results.push(full);
    }
  }
  return results;
}

async function main() {
  const files = getAllImages(IMAGES_DIR);
  console.log(`Found ${files.length} images to upload\n`);

  const mapping = {};
  let uploaded = 0;
  let failed = 0;

  for (const file of files) {
    const rel = relative(IMAGES_DIR, file);
    const { dir, name } = parse(rel);
    const publicId = dir ? `lp-usa/${dir.replace(/\\/g, '/')}/${name}` : `lp-usa/${name}`;

    try {
      console.log(`[${uploaded + failed + 1}/${files.length}] Uploading ${rel}...`);
      const result = await cloudinary.uploader.upload(file, {
        public_id: publicId,
        overwrite: true,
        resource_type: 'image',
      });
      const localKey = `images/${rel.replace(/\\/g, '/')}`;
      mapping[localKey] = {
        public_id: result.public_id,
        url: result.secure_url,
        width: result.width,
        height: result.height,
        bytes: result.bytes,
      };
      uploaded++;
      console.log(`  ✓ ${publicId} (${Math.round(result.bytes / 1024)}KB)`);
    } catch (err) {
      failed++;
      console.error(`  ✗ FAILED: ${err.message}`);
    }
  }

  writeFileSync(
    join(process.cwd(), 'src', 'cloudinary-urls.json'),
    JSON.stringify(mapping, null, 2)
  );

  console.log(`\nDone: ${uploaded} uploaded, ${failed} failed`);
  console.log('Mapping saved to src/cloudinary-urls.json');
}

main().catch(console.error);
