const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobileNav');

hamburger.addEventListener('click', () => {
  hamburger.querySelector('.bar1').classList.toggle('animateBar1');
  hamburger.querySelector('.bar2').classList.toggle('animateBar2');
  hamburger.querySelector('.bar3').classList.toggle('animateBar3');
  mobileNav.classList.toggle('openDrawer');
});
