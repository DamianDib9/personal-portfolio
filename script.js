// When the menu button is clicked, display the pop-up navigation
document.querySelector('#hamburguerIcon').onclick = function () {
  const popUpNav = document.querySelector('#popupMobile');
  popUpNav.style.display = 'flex';
};

// When the cross button is clicked, hide the pop-up navigation
document.querySelector('#crossMobile').onclick = function () {
  const popOutNav = document.querySelector('#popupMobile');
  popOutNav.style.display = 'none';
};

// When the "Portfolio" button is clicked, hide the pop-up navigation
document.querySelector('#popPortfolio').onclick = function () {
  const goToSection = document.querySelector('#popupMobile');
  goToSection.style.display = 'none';
};

// When the "About" button is clicked, hide the pop-up navigation
document.querySelector('#popAbout').onclick = function () {
  const goToSection = document.querySelector('#popupMobile');
  goToSection.style.display = 'none';
};

// When the "Contact" button is clicked, hide the pop-up navigation
document.querySelector('#popContactMe').onclick = function () {
  const goToSection = document.querySelector('#popupMobile');
  goToSection.style.display = 'none';
};
