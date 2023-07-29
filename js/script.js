const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.overlay');
const contactForm = document.querySelector('.contact-form');

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

contactForm.addEventListener('submit', (event) => {
  // event.preventDefault();
  alert("your response has been successfully submitted")}

  );


var typeData = new Typed(".role", {
    strings: [
      "Engineer.",
      "C++ Programmer.",
      "Web Developer.",
      "Coder.",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyczttZhLwJTnNZxd1kQWGT3UDYxzKSTRK9ixqcXcN5wcJTvAgnSxhYBKUzhT9JVWpIMg/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {console.log('Success!', response)
          form.reset()
    })
      .catch(error => alert.error('Error!', error.message))
  })