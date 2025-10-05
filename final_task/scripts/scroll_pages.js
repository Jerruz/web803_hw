function nextPage(event) {
    const dots = scrollDots.children;
    const targetDot = event.target;

    // if (!targetDot.classList.contains('scroll__dot')) return;

    Array.from(dots).forEach(dot => dot.classList.remove('scroll__dot--active'));
    targetDot.classList.add('scroll__dot--active');

    const dotIndex = Array.from(dots).indexOf(targetDot);
    const screenStates = [
        { header: '100vh', main: '0' },
        { header: '0', main: '100vh' },
        { header: '0', main: '0' }
    ];

    const state = screenStates[dotIndex];
    screenHeader.style.height = state.header;
    screenMain.style.height = state.main;
}

const scrollDots = document.querySelector('.scroll__dots');
const screenHeader = document.querySelector('.wrapper__header');
const screenMain = document.querySelector('.wrapper__main');

document.addEventListener('DOMContentLoaded', () => {
    scrollDots.addEventListener('click', nextPage);
});