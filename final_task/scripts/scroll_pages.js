function nextPage(event) {
    if (event.target == scrollDots.children[1]) {
        screenHeader.style.height = 0;
        screenMain.style.height = '100vh';
        scrollDots.children[0].classList.remove('scroll__dot--active')
        scrollDots.children[2].classList.remove('scroll__dot--active')
        scrollDots.children[1].classList.add('scroll__dot--active')
    } else if (event.target == scrollDots.children[2]) {
        scrollDots.children[0].classList.remove('scroll__dot--active')
        scrollDots.children[1].classList.remove('scroll__dot--active')
        scrollDots.children[2].classList.add('scroll__dot--active')
        screenHeader.style.height = 0;
        screenMain.style.height = 0;
    } else if (event.target == scrollDots.children[0]) {
        scrollDots.children[0].classList.add('scroll__dot--active')
        scrollDots.children[2].classList.remove('scroll__dot--active')
        scrollDots.children[1].classList.remove('scroll__dot--active')
        screenHeader.style.height = '100vh';
        screenMain.style.height = 0;
    }
}

let scrollDots = document.querySelector('.scroll__dots');
let screenHeader = document.querySelector('.wrapper__header');
let screenMain = document.querySelector('.wrapper__main');

document.addEventListener('DOMContentLoaded', () => {
    scrollDots.addEventListener('click', nextPage)
})