const closeIcon = document.querySelector('.header__closeIcon');
closeIcon.addEventListener('click', closeMobileMenu);
hamburgerIcon
function closeMobileMenu() {
  const mobileMenu = document.querySelector('.header__nav');
  const hamburgerIcon = document.querySelector('.header__hamburgerIcon');
  const loginButton = document.querySelector('.mobileLoginButtonStyles');
  const body = document.querySelector('.body');
  const headerInner = document.querySelector('.header__inner');
  const headerSocial = document.querySelector('.header__social');

  headerSocial.classList.add('header__social_display_none');
  headerSocial.classList.remove('header__social_display_flex');

  if(window.scrollY > 0) {
    headerInner.style.backgroundColor = 'white';
    headerInner.style.boxShadow = '0 5px 15px black';
  }

  body.style.overflow = 'visible';

  loginButton.classList.remove('mobileLoginButtonStyles');
  loginButton.classList.add('redButton');

  closeIcon.classList.remove('header__closeIcon_display_yes');
  hamburgerIcon.classList.remove('header__hamburgerIcon_display_none');

  hamburgerIcon.classList.add('header__hamburgerIcon_display_yes');
  closeIcon.classList.add('header__closeIcon_display_none');

  mobileMenu.style.display = 'none';

  fetch('img/logo-bookmark.svg')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');
    svg.setAttribute('id', 'pcLogo');
    document.querySelector('#mobileLogo').replaceWith(svg);
  });
}
