document.getElementById('menu-button').addEventListener('click', function() {
  const overlayMenu = document.getElementById('overlay-menu');
  const arrowImg = document.getElementById('arrow-img');
  overlayMenu.classList.toggle('hidden');
  arrowImg.classList.toggle('rotate');
});

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function fadeIn(text) {
  text.classList.add('fade-in');
  setTimeout(() => fadeOut(text), 2000);
}

function fadeOut(text) {
  text.classList.remove('fade-in');
}

const introText = document.getElementById('intro-text');
setTimeout(() => fadeIn(introText), 500);


//chapter 1

setTimeout(chapterOne, 4000);

const mainText = document.getElementById('box-text');
async function chapterOne() {
  mainText.innerText = "In the beginning, there was nothing";
  fadeIn(mainText);
  delay(6000);
  mainText.classList.add("italicized");
  mainText.innerText = "Click to create a point";
  mainText.classList.add('fade-in');
}