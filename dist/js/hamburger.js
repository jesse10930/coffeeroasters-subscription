// Hamburger Menu
let hamMenuOpen = document.getElementById('three-lines');
let hamMenuClose = document.getElementById('close-btn');
let hamModal = document.getElementById('my-hamburger-modal');

hamMenuOpen.onclick = (e) => {
  hamMenuOpen.style.display = 'none';
  hamMenuClose.style.display = 'flex';
  document.querySelector('body').style.overflow = 'hidden';
  hamModal.style.display = 'inline';
};

hamMenuClose.onclick = (e) => {
  hamMenuOpen.style.display = 'flex';
  hamMenuClose.style.display = 'none';
  document.querySelector('body').style.overflow = 'visible';
  hamModal.style.display = 'none';
};
