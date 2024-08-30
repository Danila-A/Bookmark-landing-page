document.addEventListener('DOMContentLoaded', ()=>{
  const hamburgerIcon = document.querySelector('.header__hamburgerIcon');
  hamburgerIcon.addEventListener('click', openMobileMenu);
});

function openMobileMenu() {
  discolorHeader();
  showSocialLinks();
  blockPageScroll();
  changeHeaderButtonStyles();
  hideHamburgerIcon();
  showCloseIcon();
  changeMobileMenuStyles();
  replaceSVGLogo();
}

function showSocialLinks() {
  const headerSocial = document.querySelector('.header__social');
  headerSocial.classList.remove('header__social_display_none');
  headerSocial.classList.add('header__social_display_flex');
}

function discolorHeader() {
  const headerInner = document.querySelector('.header__inner');
  headerInner.style.backgroundColor = 'transparent';
  headerInner.style.boxShadow = 'none';
}

function blockPageScroll() {
  const body = document.querySelector('.body');
  body.style.overflow = 'hidden';
}

function changeHeaderButtonStyles() {
  const loginButton = document.querySelector('.redButton');
  loginButton.classList.add('mobileLoginButtonStyles');
  loginButton.classList.remove('redButton');
}

function hideHamburgerIcon() {
  const hamburgerIcon = document.querySelector('.header__hamburgerIcon');
  hamburgerIcon.classList.remove('header__hamburgerIcon_display_yes');
  hamburgerIcon.classList.add('header__hamburgerIcon_display_none');
}

function showCloseIcon() {
  const closeIcon = document.querySelector('.header__closeIcon');
  closeIcon.classList.remove('header__closeIcon_display_none');
  closeIcon.classList.add('header__closeIcon_display_yes');
}

function changeMobileMenuStyles() {
  const mobileMenu = document.querySelector('.header__nav');
  mobileMenu.style.backgroundColor = 'var(--mobile_menu_background_color)';
  mobileMenu.style.display = 'flex';
}

function replaceSVGLogo() {
  fetch('img/logo-bookmark.svg')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');
    svg.setAttribute('id', 'mobileLogo');

    const svgPathElemnts = svg.querySelectorAll('path');
    svgPathElemnts[0].setAttribute('fill', 'white');
    svgPathElemnts[1].setAttribute('fill', '#242946');
    svg.querySelector('circle').setAttribute('fill', 'white');
    document.querySelector('#pcLogo').replaceWith(svg);
  });
}