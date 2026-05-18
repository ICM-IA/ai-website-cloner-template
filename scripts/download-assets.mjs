import { createWriteStream, mkdirSync } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, '..', 'public', 'images');

mkdirSync(PUBLIC, { recursive: true });

const assets = [
  { url: 'https://ss-cnt-001c.esmsv.com/r/content/host2/42ff81eb391db459f48e845a3bfb0bdf/img/LOGO2ESB.webp', name: 'logo.webp' },
  { url: 'https://ss-cnt-001c.esmsv.com/r/content/host2/42ff81eb391db459f48e845a3bfb0bdf/editor/IMG20250708163027529-6064-(5780).webp', name: 'hero-bg.webp' },
  { url: 'https://ss-cnt-001c.esmsv.com/r/content/host2/42ff81eb391db459f48e845a3bfb0bdf//editor/IMG-20250708-WA0075-(6068).webp', name: 'service-install.webp' },
  { url: 'https://ss-cnt-001c.esmsv.com/r/content/host2/42ff81eb391db459f48e845a3bfb0bdf//editor/modelo-ts18-180-litros-inoxidable.webp', name: 'termotanque-180l.webp' },
  { url: 'https://ss-cnt-001c.esmsv.com/r/content/host2/42ff81eb391db459f48e845a3bfb0bdf//editor/modelo-ts30-300-litros-inoxidable.webp', name: 'termotanque-300l.webp' },
  { url: 'https://ss-cnt-001c.esmsv.com/r/content/host2/42ff81eb391db459f48e845a3bfb0bdf//editor/4.webp', name: 'product-4.webp' },
  { url: 'https://ss-cnt-001c.esmsv.com/r/content/host2/42ff81eb391db459f48e845a3bfb0bdf//editor/5.webp', name: 'product-5.webp' },
  { url: 'https://ss-cnt-001c.esmsv.com/r/content/host2/42ff81eb391db459f48e845a3bfb0bdf//editor/IMG-20250715-WA0063.webp', name: 'gallery-1.webp' },
  { url: 'https://ss-cnt-001c.esmsv.com/r/content/host2/42ff81eb391db459f48e845a3bfb0bdf//editor/1.webp', name: 'gallery-2.webp' },
  { url: 'https://ss-cnt-001c.esmsv.com/r/content/host2/42ff81eb391db459f48e845a3bfb0bdf//editor/2.webp', name: 'gallery-3.webp' },
  { url: 'https://ss-cnt-001c.esmsv.com/r/content/host2/42ff81eb391db459f48e845a3bfb0bdf//editor/3.webp', name: 'gallery-4.webp' },
];

async function download(url, name) {
  const dest = path.join(PUBLIC, name);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  await pipeline(res.body, createWriteStream(dest));
  console.log(`✓ ${name}`);
}

async function main() {
  const chunks = [];
  for (let i = 0; i < assets.length; i += 4) chunks.push(assets.slice(i, i + 4));
  for (const chunk of chunks) {
    await Promise.all(chunk.map(a => download(a.url, a.name).catch(e => console.error(`✗ ${a.name}: ${e.message}`))));
  }
  console.log('Done!');
}

main();
