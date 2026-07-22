import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imageDir = 'public/images';
const backgroundImages = [
  'contacto-background.jpg',
  'industrial-background.jpg',
  'paneles-background.jpg',
  'residencial-background.jpg',
  'servicios-background.jpg',
  'termotanque-background.jpg',
  'testimonios-background.jpg'
];

async function optimizeImages() {
  console.log('Optimizing background images...');

  for (const imageName of backgroundImages) {
    const inputPath = path.join(imageDir, imageName);
    const webpPath = path.join(imageDir, imageName.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️ ${imageName} not found, skipping...`);
      continue;
    }

    try {
      // Optimize and convert to WebP
      await sharp(inputPath)
        .resize(2000, 1200, {
          fit: 'cover',
          position: 'center'
        })
        .webp({ quality: 80 })
        .toFile(webpPath);

      console.log(`✅ Optimized ${imageName} → ${path.basename(webpPath)}`);
    } catch (error) {
      console.error(`❌ Error optimizing ${imageName}:`, error.message);
    }
  }

  console.log('Done!');
}

optimizeImages();
