(function () {
  // Hamburger Menu
  let hamMenuOpen = document.getElementById('three-lines');
  let hamMenuClose = document.getElementById('close-btn');
  let hamModal = document.getElementById('my-hamburger-modal');

  showDropdown = (e) => {
    hamMenuOpen.style.display = 'none';
    hamMenuClose.style.display = 'flex';
    document.querySelector('body').style.overflow = 'hidden';
    hamModal.style.display = 'inline';
  };

  hideDropdown = (e) => {
    hamMenuOpen.style.display = 'flex';
    hamMenuClose.style.display = 'none';
    document.querySelector('body').style.overflow = 'visible';
    hamModal.style.display = 'none';
  };

  hamMenuOpen.onclick = () => showDropdown();
  hamMenuClose.onclick = () => hideDropdown();
})();
