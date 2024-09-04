document.addEventListener('DOMContentLoaded', replaceSVGs);
document.addEventListener('DOMContentLoaded', changeMobileMenuBackgroundColor);

function replaceSVGs() {
    fetch('img/logo-bookmark.svg')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');
      svg.setAttribute('id', 'pcLogo');
      document.querySelector('.logo').replaceWith(svg);
    });
}

function changeMobileMenuBackgroundColor() {
  const headerInner = document.querySelector('.header__inner');

  if (window.scrollY > 0 && window.innerWidth <= 420) {
    headerInner.style.backgroundColor = 'white';
    headerInner.style.boxShadow = '0 5px 15px black';
  }
}
