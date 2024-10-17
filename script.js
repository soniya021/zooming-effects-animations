let items = document.querySelectorAll('.slider .items');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');

let lastPosition = items.length - 1;
let firstPosition = 0;
let active = 1;

nextBtn.onclick = () => {
    if (active < lastPosition) {
        active++;
        setSlider();
    }
}

prevBtn.onclick = () => {
    if (active > firstPosition) {
        active--;
        setSlider();
    }
}

const setSlider = () => {
    let oldActive = document.querySelector('.slider .items.active');
    if (oldActive) oldActive.classList.remove('active');
    
    if (items[active]) {  // Make sure active is within bounds
        items[active].classList.add('active');
    }

    // Show or hide navigation buttons
    nextBtn.classList.remove('d-none');
    prevBtn.classList.remove('d-none');
    if (active === lastPosition) nextBtn.classList.add('d-none');
    if (active === firstPosition) prevBtn.classList.add('d-none');
}
setSlider(); 
const setDiameter = () => {
    let slider = document.querySelector('.slider');
    let widthSlider = slider.offsetWidth;
    let heightSlider = slider.offsetHeight;
    let diameter = Math.sqrt(Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2));
    document.documentElement.style.setProperty('--diameter', diameter + 'px');
}

setDiameter();
window.addEventListener('resize', setDiameter);
