const cards = document.querySelectorAll('.other-card');

cards.forEach(card => {

  card.addEventListener('mousemove', (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    /* 🔥 TILT (unchanged but strong) */
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    /* ✨ MAGNETIC OFFSET */
    const moveX = ((x - centerX) / centerX) * 10; // horizontal pull
    const moveY = ((y - centerY) / centerY) * 10; // vertical pull

    /* ✨ GLARE */
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);

    card.style.transform = `
      perspective(800px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateX(${moveX}px)
      translateY(${moveY - 10}px)
    `;
  });

  card.addEventListener('mouseleave', () => {

    card.style.transform = `
      perspective(800px)
      rotateX(0deg)
      rotateY(0deg)
      translateX(0)
      translateY(0)
    `;

    card.style.removeProperty('--x');
    card.style.removeProperty('--y');
  });

});