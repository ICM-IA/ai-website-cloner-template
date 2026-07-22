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

async function optimizeImagesForMobile() {
  console.log('Creating mobile-optimized versions...');

  for (const imageName of backgroundImages) {
    const inputPath = path.join(imageDir, imageName);
    const mobileWebpPath = path.join(imageDir, imageName.replace(/\.(jpg|jpeg|png)$/i, '-mobile.webp'));
    const mobileJpgPath = path.join(imageDir, imageName.replace(/\.(jpg|jpeg|png)$/i, '-mobile.jpg'));

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️ ${imageName} not found, skipping...`);
      continue;
    }

    try {
      // Create mobile WebP (smaller, high quality)
      await sharp(inputPath)
        .resize(1200, 800, {
          fit: 'cover',
          position: 'center'
        })
        .webp({ quality: 85 })
        .toFile(mobileWebpPath);

      // Create mobile JPG fallback (high quality for older browsers)
      await sharp(inputPath)
        .resize(1200, 800, {
          fit: 'cover',
          position: 'center'
        })
        .jpeg({ quality: 85, progressive: true })
        .toFile(mobileJpgPath);

      console.log(`✅ Created mobile versions of ${imageName}`);
    } catch (error) {
      console.error(`❌ Error optimizing ${imageName}:`, error.message);
    }
  }

  console.log('Done!');
}

optimizeImagesForMobile();
