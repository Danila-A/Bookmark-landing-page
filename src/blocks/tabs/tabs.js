const tabs = document.querySelector('.tabs');

tabs.addEventListener('click', (e) => {
    const tab = e.target;

    if (tab.getAttribute('data-tab') == null) return;

    const imgClassName = tab.getAttribute('data-tab');
    const img = document.querySelector('.' + imgClassName);

    higeAllImages();
    uncheckedAll();

    showImage(img);
    checkTab(tab);
});

function higeAllImages() {
    const images = document.querySelectorAll('.features__img');
    images.forEach(hideImg);
}

function hideImg(img) {
    img.classList.remove('features__img_display_block');
    img.classList.add('features__img_display_none');
}

function uncheckedAll() {
    const tabs = document.querySelectorAll('.tabs__item');

    tabs.forEach(uncheckItem);
}

function uncheckItem(item) {
    item.classList.remove('checked');
}

function showImage(img) {
    img.classList.remove('features__img_display_none');
    img.classList.add('features__img_display_block');
}

function checkTab(tab) {
    tab.classList.add('checked');
}