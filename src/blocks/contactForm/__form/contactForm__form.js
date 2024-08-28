const emailRegularExpression = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
const russianLettersRegularExpression = /[а-я]/;
const formButton = document.querySelector('.form__button');

document.addEventListener('DOMContentLoaded', () => {
    if(window.innerWidth <= 375) formButton.style.transform = 'translateY(-30px)';
});

document.querySelector('.form__button').addEventListener('click', (e) => {
    e.preventDefault();
    checkEmail();
});

function checkEmail() {
    const input = document.querySelector('.form__input');
    // nigger.spn@mail.ru
    if(emailRegularExpression.test(input.value) &&
       !russianLettersRegularExpression.test(input.value)) {
        if(window.innerWidth <= 375) formButton.style.transform = 'translateY(-30px)';
        hideError(input);
        console.log('good');
    }
    else {
        if(window.innerWidth <= 375) formButton.style.transform = 'translateY(0px)';
        showError(input);
    }
}

function showError(input) {
    const redBlock = document.querySelector('.redBlock');
    const errorImg = document.querySelector('.form__img');
    redBlock.classList.add('display_block');
    errorImg.classList.add('errorImg_display_block');
    input.classList.add('error');
}

function hideError(input) {
    const redBlock = document.querySelector('.redBlock');
    const errorImg = document.querySelector('.form__img');
    redBlock.classList.remove('display_block');
    errorImg.classList.remove('errorImg_display_block');
    input.classList.remove('error');
}