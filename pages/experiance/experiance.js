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






// Open the Modal
function openModal(imageUrl) {
  var modal = document.getElementById('myModal');
  var modalImg = document.getElementById('modalImg');
  modal.style.display = 'block';
  modalImg.src = imageUrl;
}

// Close the Modal
function closeModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = 'none';
}

