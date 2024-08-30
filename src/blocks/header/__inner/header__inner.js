document.addEventListener('DOMContentLoaded', setHeaderBackGround);

function setHeaderBackGround() {
    const headerInner = document.querySelector('.header__inner');

    window.addEventListener('scroll', changeBackground, false);

    function changeBackground() {
        if(window.scrollY > 0 && window.innerWidth <= 375) {
            headerInner.style.backgroundColor = 'white';
            headerInner.style.boxShadow = '0 5px 15px black';
        }
        else {
            headerInner.style.backgroundColor = 'transparent';
            headerInner.style.boxShadow = 'none';
        }
        
    }
}
