let countSlider = document.querySelectorAll('.slider--item').length;
let currentSlider = 0;
document.querySelector('.slider--width').style.width = `calc(100vw * ${countSlider})`;
document.querySelector('.controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

console.log(document.querySelector('.slider').clientHeight);

function goPrev(){
    currentSlider--;
    if(currentSlider < 0){
        currentSlider = countSlider -1; 
    }
    updateMargin()

}

function goNext(){
    currentSlider++;
    if(currentSlider > (countSlider -1)){
        currentSlider = 0;
    }
    updateMargin();

}

function updateMargin(){
    let newMargin = (currentSlider * document.body.clientWidth);
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}