document.addEventListener('DOMContentLoaded', getAndSetArrows);

let blueArrow;

function getAndSetArrows() {
    fetch('img/icon-arrow.svg')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        blueArrow = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');
        blueArrow.setAttribute('class', 'arrow');
        setArrows();
    });
}

function setArrows() {
    const questions = document.querySelectorAll('.faq__questionsItem');
    
    for (let i = 0; i < 4; i++) questions[i].childNodes[1].replaceWith(blueArrow.cloneNode(true));
    
    const arrows = document.querySelectorAll('.arrow');

    for (let arrow of arrows) {
        arrow.addEventListener('click', () => {
            arrow.closest('.faq__questionsItem').childNodes[0].toggleAttribute('open');
            arrow.classList.toggle('arrow_open');
        })
    }
}
