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




var typeData = new Typed(".role", {
    strings: [
      "Engineer.",
      "Programmer.",
      "Aspiring Software Enginner.",
      "Front-End Developer.",
      "Machine Learning Enthusiast.",
      "Aspiring Data Enginner.",
      "Aspiring Data Analyst."


    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });
