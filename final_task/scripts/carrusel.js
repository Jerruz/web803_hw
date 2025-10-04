let nextBtn = document.querySelector('.next-button');
let prevBtn = document.querySelector('.prev-button');
let slider = document.querySelector('.slider');

let totalSlide = document.querySelectorAll('.slide').length;
let idx = 0;


document.addEventListener('DOMContentLoaded', () => {
    prevBtn.addEventListener('click', () => {
        idx = idx === 0 ? totalSlide - 1 : idx - 1;
        updateSlider();
    })

    nextBtn.addEventListener('click', () => {
        idx = idx === totalSlide - 1 ? 0 : idx + 1;
        updateSlider();
    })
})

function updateSlider() {
    slider.style.transform = `translateX(-${idx * 350}px)`;
}
