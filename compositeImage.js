const Jimp = require('jimp');

Jimp.read('background.jpg').then(image1 => {
  Jimp.read('contribution-graph.png').then(image2 => {

    image2.resize(1100, Jimp.AUTO);

    const width = image2.bitmap.width;
    const height = image2.bitmap.height;

    const x = (image1.bitmap.width - width) / 2;
    const y = (image1.bitmap.height - height) / 2;
    
    image1.composite(image2, x, y).write('output.jpg');
  });
});