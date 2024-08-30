document.addEventListener('DOMContentLoaded', ()=> {
  const closeIcon = document.querySelector('.header__closeIcon');
  closeIcon.addEventListener('click', closeMobileMenu);
})

function closeMobileMenu() {
  hideSocialLinks();
  colorHeader();
  unblockPageScroll();
  changeButtonStyles();
  hideCloseIcon();
  showHamburgerIcon();
  hideMobileMenu();
  changeLogo();
}

function hideSocialLinks() {
  const headerSocial = document.querySelector('.header__social');
  headerSocial.classList.add('header__social_display_none');
  headerSocial.classList.remove('header__social_display_flex');
}

function colorHeader() {
  const headerInner = document.querySelector('.header__inner');
  if(window.scrollY > 0) {
    headerInner.style.backgroundColor = 'white';
    headerInner.style.boxShadow = '0 5px 15px black';
  }
}

function unblockPageScroll() {
  const body = document.querySelector('.body');
  body.style.overflow = 'visible';
}

function changeButtonStyles() {
  const loginButton = document.querySelector('.mobileLoginButtonStyles');
  loginButton.classList.remove('mobileLoginButtonStyles');
  loginButton.classList.add('redButton');
}

function hideCloseIcon() {
  const closeIcon = document.querySelector('.header__closeIcon');
  closeIcon.classList.remove('header__closeIcon_display_yes');
  closeIcon.classList.add('header__closeIcon_display_none');
}

function showHamburgerIcon() {
  const hamburgerIcon = document.querySelector('.header__hamburgerIcon');
  hamburgerIcon.classList.remove('header__hamburgerIcon_display_none');
  hamburgerIcon.classList.add('header__hamburgerIcon_display_yes');
}

function hideMobileMenu() {
  const mobileMenu = document.querySelector('.header__nav');
  mobileMenu.style.display = 'none';
}

function changeLogo() {
  fetch('img/logo-bookmark.svg')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');
    svg.setAttribute('id', 'pcLogo');
    document.querySelector('#mobileLogo').replaceWith(svg);
  });
}