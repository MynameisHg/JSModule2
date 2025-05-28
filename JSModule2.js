function showDescription(text) {
  const desc = document.getElementById('image-description');
  desc.textContent = text;
}

function clearDescription() {
  const desc = document.getElementById('image-description');
  desc.textContent = 'Hover over an image to see the description.';
}