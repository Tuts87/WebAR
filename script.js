const modelViewerColor = document.querySelector("model-viewer#color");

document.querySelector('#color-controls').addEventListener('click', (event) => {
  const colorString = event.target.dataset.color;

  if (!colorString) {
    return;
  }

  const color = colorString.split(',')
      .map(numberString => parseFloat(numberString));

  console.log('Changing color to: ', color);
  const [material] = modelViewerColor.model.materials;
  material.pbrMetallicRoughness.setBaseColorFactor(color);
});
