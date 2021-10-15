const welcomeSliderLine = document.querySelector('.welcome__slider-line');
const NextSlideBtn = document.querySelector('#welcome__next');
const PrevSlideBtn = document.querySelector('#welcome__prev');
const slideNumber = document.querySelector('.num__item');
const sliderDots = document.querySelectorAll('.btns__item');
const windowInnerWidth2 = document.body.clientWidth;
let offset = 0;
let i = 1;

// function chekWindowWidth() {
//     if (windowInnerWidth2 <= 1064 && windowInnerWidth2 >= 801) {
//         console.log('2');
//     } else {
//         return null
//     }
// }

// window.addEventListener('resize', function() {
//     chekWindowWidth()
// });


function incSlideNum(){
    if (i > 4) {
        return i = 1;
    }
    return i++;
}

function decrSlideNum(){
    if (i <= 1) {
        return i = 5;
    }
    return i--;
}

function chekWidthAndSlides() {
    if (windowInnerWidth2 <= 1064 && windowInnerWidth2 >= 801) {
        offset += 700;
        if (offset > 2800) {
            offset = 0;
        }
    } if (windowInnerWidth2 <= 800 && windowInnerWidth2 >= 461) {
        offset += 728;
        if (offset > 2912) {
            offset = 0;
        }
    } if (windowInnerWidth2 <= 461) {
        offset += 380;
        if (offset > 1520) {
            offset = 0;
        }
    } if (windowInnerWidth2 >= 1065) {
        offset += 1000;
        if (offset > 4000) {
            offset = 0;
        }
    }
}

function nextSlide() {
    incSlideNum()
    nextDot()
    chekWidthAndSlides()
    welcomeSliderLine.style.right = offset + 'px';
    slideNumber.innerHTML = `0${i}`
}

function prevSlide() {
    decrSlideNum()
    prevDot()
    if (windowInnerWidth2 <= 1064 && windowInnerWidth2 >= 801) {
        offset -= 700;
        if (offset < 0) {
            offset = 2800;
        }
    } if (windowInnerWidth2 <= 800 && windowInnerWidth2 >= 461) {
        offset -= 728;
        if (offset < 0) {
            offset = 2912;
        }
    } if (windowInnerWidth2 <= 461) {
        offset -= 380;
        if (offset < 0) {
            offset = 1520;
        }
    } if (windowInnerWidth2 >= 1065) {
        offset -= 1000;
        if (offset < 0) {
            offset = 4000;
        }
    }
    welcomeSliderLine.style.right = offset + 'px';
    slideNumber.innerHTML = `0${i}`
}

function nextDot() {
    let nextActiveDot = sliderDots[`${i-1}`];
    let removeActiveDot = sliderDots[`${i-2}`];
    nextActiveDot.classList.add('active');
    if (i == 1) {
        sliderDots[4].classList.remove('active')
    } else {
        removeActiveDot.classList.remove('active');
    }
}

function prevDot() {
    let x = sliderDots[i]
    let nextActiveDot = sliderDots[`${i-1}`];
    let removeActiveDot = sliderDots[`${i}`];
    nextActiveDot.classList.add('active');
    if (i == 5) {
        sliderDots[0].classList.remove('active')
    } else {
        removeActiveDot.classList.remove('active');
    }
}

sliderDots.forEach(e => {
    e.addEventListener('click', el => {
        sliderDots.forEach(e => e.classList.remove('active'))
        if (el.target === sliderDots[0]) {
            el.target.classList.add('active')
            welcomeSliderLine.style.right = 0 + 'px'
            offset = 0
            i = 1
            slideNumber.innerHTML = `0${i}`
        } if (el.target === sliderDots[1]) {
            el.target.classList.add('active')
            if (windowInnerWidth2 <= 1064 && windowInnerWidth2 >= 801) {
                welcomeSliderLine.style.right = 700 + 'px'
                offset = 700
            } if (windowInnerWidth2 <= 800 && windowInnerWidth2 >= 461) {
                welcomeSliderLine.style.right = 728 + 'px'
                offset = 728
            } if (windowInnerWidth2 <= 461) {
                welcomeSliderLine.style.right = 380 + 'px'
                offset = 380
            } if (windowInnerWidth2 >= 1065) {
                welcomeSliderLine.style.right = 1000 + 'px'
                offset = 1000
            }
            i = 2
            slideNumber.innerHTML = `0${i}`
        } if (el.target === sliderDots[2]) {
            el.target.classList.add('active')
            if (windowInnerWidth2 <= 1064 && windowInnerWidth2 >= 801) {
                welcomeSliderLine.style.right = 1400 + 'px'
                offset = 1400
            } if (windowInnerWidth2 <= 800 && windowInnerWidth2 >= 461) {
                welcomeSliderLine.style.right = 1456 + 'px'
                offset = 1456
            } if (windowInnerWidth2 <= 461) {
                welcomeSliderLine.style.right = 760 + 'px'
                offset = 760
            } if (windowInnerWidth2 >= 1065) {
                welcomeSliderLine.style.right = 2000 + 'px'
                offset = 2000
            }
            offset = 2000
            i = 3
            slideNumber.innerHTML = `0${i}`
        } if (el.target === sliderDots[3]) {
            el.target.classList.add('active')
            if (windowInnerWidth2 <= 1064 && windowInnerWidth2 >= 801) {
                welcomeSliderLine.style.right = 2100 + 'px'
                offset = 2100
            } if (windowInnerWidth2 <= 800 && windowInnerWidth2 >= 461) {
                welcomeSliderLine.style.right = 2184 + 'px'
                offset = 2184
            } if (windowInnerWidth2 <= 461) {
                welcomeSliderLine.style.right = 1140 + 'px'
                offset = 1140
            } if (windowInnerWidth2 >= 1065) {
                welcomeSliderLine.style.right = 3000 + 'px'
                offset = 3000
            }
            i = 4
            slideNumber.innerHTML = `0${i}`
        } if (el.target === sliderDots[4]) {
            el.target.classList.add('active')
            if (windowInnerWidth2 <= 1064 && windowInnerWidth2 >= 801) {
                welcomeSliderLine.style.right = 2800 + 'px'
                offset = 2800
            } if (windowInnerWidth2 <= 800 && windowInnerWidth2 >= 461) {
                welcomeSliderLine.style.right = 2912 + 'px'
                offset = 2912
            } if (windowInnerWidth2 <= 461) {
                welcomeSliderLine.style.right = 1520 + 'px'
                offset = 1520
            } if (windowInnerWidth2 >= 1065) {
                welcomeSliderLine.style.right = 4000 + 'px'
                offset = 4000
            }
            i = 5
            slideNumber.innerHTML = `0${i}`
        }
    })
})

NextSlideBtn.addEventListener('click', nextSlide)
PrevSlideBtn.addEventListener('click', prevSlide)