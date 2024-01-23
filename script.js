const imageContainer = document.querySelector('.image-container');
let scale = 1;

imageContainer.addEventListener('wheel', (event) => {
  event.preventDefault();
  const deltaY = event.deltaY;
  scale += deltaY * -0.01;
  scale = Math.min(Math.max(1, scale), 3); // Limit scale between 0.5x and 3x
  imageContainer.style.transform = `scale(${scale})`;
});
