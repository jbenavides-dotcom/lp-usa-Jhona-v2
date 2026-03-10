import { StrictMode } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// If pre-rendered HTML exists, hydrate; otherwise create fresh root
if (root.childNodes.length > 0) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
