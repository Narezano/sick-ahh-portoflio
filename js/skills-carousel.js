const track = document.querySelector('.skills-track');

let speed = 1.5;
let isDragging = false;
let startX = 0;
let currentTranslate = 0;

// duplicate for seamless loop
track.innerHTML += track.innerHTML;

// start from middle
let position = -track.scrollWidth / 2;

function animate() {
  if (!isDragging) {
    position += speed;
  }

  const trackWidth = track.scrollWidth / 2;

  // loop reset
  if (position >= 0) {
    position = -trackWidth;
  }

  track.style.transform = `translateX(${position}px)`;

  requestAnimationFrame(animate);
}

animate();


// mouse drag
track.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  currentTranslate = position;
  track.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
  isDragging = false;
  track.style.cursor = 'grab';
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const dx = e.clientX - startX;
  position = currentTranslate + dx;
});


// touch support
track.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
  currentTranslate = position;
});

track.addEventListener('touchend', () => {
  isDragging = false;
});

track.addEventListener('touchmove', (e) => {
  if (!isDragging) return;

  const dx = e.touches[0].clientX - startX;
  position = currentTranslate + dx;
});