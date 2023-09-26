document.addEventListener('DOMContentLoaded', function () {
  const element = document.getElementById('explore-button');
  const container = document.getElementById('particle-container');

  function createParticle(angle) {
    const div = document.createElement('div');
    div.className = 'particle';
    const rect = element.getBoundingClientRect();
    const size = Math.random() * 0.004 * rect.width + 5;
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const distance = rect.width * 0.06; 
    const radians = angle * (Math.PI / 180);
    const startX = x + Math.cos(radians) * distance - size / 2;
    const startY = (y + Math.sin(radians) * distance - size / 2) + 25;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.background = 'white';
    div.style.borderRadius = '50%';
    div.style.position = 'absolute';
    div.style.left = `${startX}px`;
    div.style.top = `${startY}px`;
    container.appendChild(div);

    animateParticle(div, startX, startY, angle);
  }

  function animateParticle(particle, startX, startY, startAngle) {
    const speed = 0.3; 
    const duration = 2000;
    const startTime = Date.now();
    const startRadians = startAngle * (Math.PI / 180);

    function frame() {
      const now = Date.now();
      const progress = (now - startTime) / duration;
      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        container.removeChild(particle);
      }
      const x = startX + Math.cos(startRadians) * progress * speed * 200; 
      const y = startY + Math.sin(startRadians) * progress * speed * 200; 
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.opacity = 1 - progress;
    }

    frame();
  }

  let angle = 0;
  setInterval(() => {
    angle = Math.random() * 360;
    createParticle(angle);
  }, 50);
});
