import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

// Import the SSR bundle
const modulePath = pathToFileURL(resolve(root, 'dist/server/entry-server.js')).href;
const { render } = await import(modulePath);
const rendered = render();

// Inject into the client index.html
const indexPath = resolve(root, 'dist/index.html');
let html = readFileSync(indexPath, 'utf-8');
html = html.replace(
  '<div id="root"></div>',
  `<div id="root">${rendered}</div>`
);
writeFileSync(indexPath, html);

// Clean up server build
rmSync(resolve(root, 'dist/server'), { recursive: true, force: true });

console.log('✓ Pre-rendered index.html with SSR content');
