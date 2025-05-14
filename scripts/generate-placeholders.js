const fs = require('fs');
const path = require('path');
const https = require('https');

const products = [
  {
    name: 'tea-machine',
    width: 800,
    height: 800,
    color: '4ade80',
    text: '多功能茶機',
    subtext: 'Tea Machine'
  },
  {
    name: 'osmanthus-coix',
    width: 800,
    height: 800,
    color: 'fbbf24',
    text: '桂花薏米茶',
    subtext: 'Osmanthus Coix Tea'
  },
  {
    name: 'anti-aging',
    width: 800,
    height: 800,
    color: 'f472b6',
    text: '抗衰老茶',
    subtext: 'Anti-Aging Tea'
  },
  {
    name: 'jasmine-pearl',
    width: 800,
    height: 800,
    color: 'a3e635',
    text: '茉莉花茶',
    subtext: 'Jasmine Pearl Tea'
  },
  {
    name: 'sencha',
    width: 800,
    height: 800,
    color: '34d399',
    text: '煎茶',
    subtext: 'Sencha'
  },
  {
    name: 'longjing-premium',
    width: 800,
    height: 800,
    color: '22c55e',
    text: '龍井茶',
    subtext: 'Longjing Premium'
  },
  {
    name: 'longjing-first',
    width: 800,
    height: 800,
    color: '22c55e',
    text: '龍井茶',
    subtext: 'Longjing First Grade'
  },
  {
    name: 'longjing-gift',
    width: 800,
    height: 800,
    color: '22c55e',
    text: '龍井茶',
    subtext: 'Longjing Gift Box'
  },
  {
    name: 'tieguanyin-premium',
    width: 800,
    height: 800,
    color: '0ea5e9',
    text: '鐵觀音',
    subtext: 'Tieguanyin Premium'
  },
  {
    name: 'tieguanyin-first',
    width: 800,
    height: 800,
    color: '0ea5e9',
    text: '鐵觀音',
    subtext: 'Tieguanyin First Grade'
  },
  {
    name: 'tieguanyin-gift',
    width: 800,
    height: 800,
    color: '0ea5e9',
    text: '鐵觀音',
    subtext: 'Tieguanyin Gift Box'
  },
  {
    name: 'honey-premium',
    width: 800,
    height: 800,
    color: 'f59e0b',
    text: '蜂蜜茶',
    subtext: 'Honey Premium'
  },
  {
    name: 'honey-combo',
    width: 800,
    height: 800,
    color: 'f59e0b',
    text: '蜂蜜茶',
    subtext: 'Honey Combo'
  },
  {
    name: 'honey-gift',
    width: 800,
    height: 800,
    color: 'f59e0b',
    text: '蜂蜜茶',
    subtext: 'Honey Gift Box'
  },
  {
    name: 'placeholder',
    width: 800,
    height: 800,
    color: '94a3b8',
    text: '茶葉',
    subtext: 'Tea Product',
    filename: 'placeholder.jpg'
  }
];

// Create images directory if it doesn't exist
const imagesDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Function to download image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(filename);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${filename}`);
          resolve();
        });
      } else {
        reject(`Failed to download ${url}`);
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Generate and download all placeholder images
async function generateImages() {
  for (const product of products) {
    const imageUrl = `https://placehold.co/${product.width}x${product.height}/${product.color}/ffffff?text=${encodeURIComponent(product.text)}&font=noto-sans-sc&subtext=${encodeURIComponent(product.subtext)}&text-align=center&text-size=48&subtext-size=24&bg-gradient=linear-gradient(45deg,${product.color},${product.color}dd)`;
    const filename = product.filename || `${product.name.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    await downloadImage(imageUrl, path.join(imagesDir, filename));
    console.log(`Downloaded: ${filename}`);
  }
}

generateImages().then(() => {
  console.log('All placeholder images generated successfully!');
}).catch(error => {
  console.error('Error generating placeholder images:', error);
}); 