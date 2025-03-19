const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  hamburger.querySelector('.bar1').classList.toggle('animateBar1');
  hamburger.querySelector('.bar2').classList.toggle('animateBar2');
  hamburger.querySelector('.bar3').classList.toggle('animateBar3');
});
