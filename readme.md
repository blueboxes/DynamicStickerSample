# Dynamic Image Generation with Azure Functions Sample

This is a code sample based on Thomas Pentenrieder [generating dynamic images with azure functions blog post](https://medium.com/medialesson/generating-dynamic-images-with-azure-functions-61ccb468ccee) though with a few differences.

The sample uses the technique described in his blog post along with [Titan One](https://fonts.google.com/specimen/Titan+One?query=Titan+One) google font to create dynamic sticker images. The colors of the sticker were inspired by [Stephanie Eckles Reusable CSS "Sticker" Effect](https://dev.to/5t3ph/reusable-css-sticker-effect-44lc) though the implementation is different.

![Sample Sticker](/images/Sticker.png)

## Running
This code runs via VS code with Azure Functions add in. To modify the text once running append a query string

```
http://localhost:7071/api/Sticker?text=Sticker%20Demo
```

## About the Code
The sample has been produced to accompany a live codding session.

The text is an SVG as the border needs to be painted before the text. This can only be done in chrome if the text is an SVG.

The font cannot be loaded into the template as a handlebars value so the template is a HTML fragment rather than a whole page. This allows us to append the font definition first.

The code is not using Async Methods to make it simpler for beginners to read. I have also kept with requires rather than import so that we do not deviate from the default function template.