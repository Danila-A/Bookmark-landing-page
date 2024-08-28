document.addEventListener('DOMContentLoaded', replaceSocialLinks);

function replaceSocialLinks() {
    const socialLinksConteiner = document.querySelectorAll('.footer__socialIcon');

    fetch('img/icon-facebook.svg')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const faceBookIcon = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');
        faceBookIcon.setAttribute('class', 'footer__socialLink');
        socialLinksConteiner[0].childNodes[0].replaceWith(faceBookIcon);
    });

    fetch('img/icon-twitter.svg')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const twitterIcon = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');
        twitterIcon.setAttribute('class', 'footer__socialLink');
        socialLinksConteiner[1].childNodes[0].replaceWith(twitterIcon);
    });
}