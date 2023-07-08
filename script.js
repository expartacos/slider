let countSlider = document.querySelectorAll('.slider--item').length;

document.querySelector('.slider--width').style.width = `calc(100vw * ${countSlider})`;
document.querySelector('.controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

console.log(document.querySelector('.slider').clientHeight);