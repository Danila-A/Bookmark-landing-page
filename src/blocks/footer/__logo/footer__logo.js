document.addEventListener('DOMContentLoaded', replaceLogo);

function replaceLogo() {
    fetch('img/logo-bookmark.svg')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');
        svg.querySelector('path').setAttribute('fill', 'white');
        document.querySelector('.footer__logoImg').replaceWith(svg);
    });
}
