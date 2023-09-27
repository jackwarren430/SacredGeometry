document.getElementById('menu-button').addEventListener('click', function() {
  const overlayMenu = document.getElementById('overlay-menu');
  const arrowImg = document.getElementById('arrow-img');
  overlayMenu.classList.toggle('hidden');
  arrowImg.classList.toggle('rotate');
});