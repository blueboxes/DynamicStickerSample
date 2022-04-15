const nodeHtmlToImage = require('node-html-to-image');
const fs = require('fs');
const path = require('path');
const font2base64 = require('node-font2base64');

module.exports = async function (context, req) {

  const fontData = font2base64.encodeToDataUrlSync(path.join(__dirname, 'TitanOne-Regular.ttf'))
  const templateHtml = fs.readFileSync(path.join(__dirname, 'templates.html'), 'utf8');

  const image = await nodeHtmlToImage({
    html: `<style>@font-face {font-family:'Titan One';src: url(${fontData}) format('truetype');}</style>${templateHtml}`,
    selector: ".sticker",
    transparent: true,
    content: { text: req.query.text ?? 'Amazing' }
  });

  context.res = {
    header: { "content-type": "image/png" },
    body: image
  };

} 