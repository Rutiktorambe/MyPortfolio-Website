const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
  hamburger.classList.toggle('active');
  overlay.classList.toggle('active');
});

function closeMobileNav(){
  mobileNav.classList.remove('active');
  hamburger.classList.remove('active');
  overlay.classList.remove('active');
}

overlay.addEventListener("click", closeMobileNav);



function openResume() {
  window.open('../../assets/Rutik_Torambe_Resume.pdf', '_blank');
}