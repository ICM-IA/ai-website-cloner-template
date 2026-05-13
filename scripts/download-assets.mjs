import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, '..', 'public');

const assets = [
  {
    url: 'https://icm-ia.com/wp-content/uploads/2026/03/cropped-icm-ia-logo-1-205x68.webp',
    dest: 'images/logo.webp',
  },
  {
    url: 'https://icm-ia.com/wp-content/uploads/2025/11/Diseno-sin-titulo-9.mp4',
    dest: 'videos/hero-robot.mp4',
  },
  {
    url: 'https://icm-ia.com/wp-content/uploads/2025/11/Diseno-sin-titulo-25.png',
    dest: 'images/robot-reading.png',
  },
];

async function download(url, destRelative) {
  const dest = join(PUBLIC, destRelative);
  mkdirSync(dirname(dest), { recursive: true });
  console.log(`Downloading ${url} -> ${dest}`);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = await res.arrayBuffer();
    writeFileSync(dest, Buffer.from(buf));
    console.log(`  ✓ ${destRelative} (${(buf.byteLength / 1024).toFixed(1)} KB)`);
  } catch (e) {
    console.error(`  ✗ Failed: ${e.message}`);
  }
}

// Download in batches of 4
const BATCH = 4;
for (let i = 0; i < assets.length; i += BATCH) {
  await Promise.all(assets.slice(i, i + BATCH).map(a => download(a.url, a.dest)));
}
console.log('Done.');
