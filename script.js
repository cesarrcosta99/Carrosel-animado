const buttonNext = document.querySelector('.next');
const buttonBack = document.querySelector('.back');
const list = document.querySelector('.main .list');
const thumbs = document.querySelector('.main .thumb');
const main = document.querySelector('.main');

buttonNext.addEventListener('click', () => {
    let listItem = document.querySelectorAll('.list .list-items');
    let thumbItems = document.querySelectorAll('.thumb img');
    list.appendChild(listItem[0]);
    thumbs.appendChild(thumbItems[0]);
    main.classList.add('next');
    setTimeout(() => {
        main.classList.remove('next');
    }, 3000);
});

buttonBack.addEventListener('click', () => {
    let listItem = document.querySelectorAll('.list .list-items');
    let thumbItems = document.querySelectorAll('.thumb img');

    list.prepend(listItem[listItem.length - 1]);
    thumbs.prepend(thumbItems[thumbItems.length - 1]);
    main.classList.add('back');

    setTimeout(() => {
        main.classList.remove('back');
    }, 3000);
});

