// Your code here.
 const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

// When mouse is pressed down
slider.addEventListener('mousedown', (event) => {
  isDown = true;
  slider.classList.add('active');
  startX = event.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

// When mouse leaves the container
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

// When mouse is released
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

// While moving the mouse
slider.addEventListener('mousemove', (event) => {
  if (!isDown) return;
  event.preventDefault();
  const x = event.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // Adjust scrolling speed
  slider.scrollLeft = scrollLeft - walk;
  console.log({ x, startX, walk }); // Debugging values
});
