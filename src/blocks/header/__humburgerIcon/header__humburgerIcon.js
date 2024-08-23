const hamburgerIcon = document.querySelector('.header__hamburgerIcon');
hamburgerIcon.addEventListener('click', openMobileMenu);

function openMobileMenu() {
  const mobileMenu = document.querySelector('.header__nav');
  const closeIcon = document.querySelector('.header__closeIcon');
  const loginButton = document.querySelector('.redButton');
  const body = document.querySelector('.body');
  const headerInner = document.querySelector('.header__inner');
  const headerSocial = document.querySelector('.header__social');

  headerSocial.classList.remove('header__social_display_none');
  headerSocial.classList.add('header__social_display_flex');

  if(window.scrollY > 0) {
    headerInner.style.backgroundColor = 'transparent';
    headerInner.style.boxShadow = 'none';
  }
  
  headerInner.style.backgroundColor = 'transparent';
  headerInner.style.boxShadow = 'none';

  body.style.overflow = 'hidden';

  loginButton.classList.add('mobileLoginButtonStyles');
  loginButton.classList.remove('redButton');

  hamburgerIcon.classList.remove('header__hamburgerIcon_display_yes');
  closeIcon.classList.remove('header__closeIcon_display_none');

  hamburgerIcon.classList.add('header__hamburgerIcon_display_none');
  closeIcon.classList.add('header__closeIcon_display_yes');

  mobileMenu.style.backgroundColor = 'var(--mobile_menu_background_color)';
  mobileMenu.style.display = 'flex';

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
