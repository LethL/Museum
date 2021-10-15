const ticketsBtn = document.querySelector('.form__btn');
const popup = document.querySelector('.overlay__popup');
const closeBtn = document.querySelector('.popup__close');
const overlayClose = document.querySelector('.overlay__popup');
let basicInput = document.querySelector('#basic__input');
const plusBtn = document.querySelector('.amount__btn-plus');
const price = document.querySelector('.price');
const radioBtns = document.querySelectorAll('.radio')

ticketsBtn.addEventListener('click', e => {
    e.preventDefault()
    let btnArea = e.target.getBoundingClientRect()
    let xCoord = e.clientX - btnArea.left;
    let yCoord = e.clientY - btnArea.top;
    let ripple = document.createElement('span');
    ripple.classList.add('ripple');
    ripple.style.left = xCoord + 'px';
    ripple.style.top = yCoord + 'px';
    e.target.appendChild(ripple)
    
    setTimeout(() => {
        ripple.remove()
    },1000)
})

ticketsBtn.addEventListener('click', () => {
    popup.classList.add('show')
})

closeBtn.addEventListener('click', () => {
    popup.classList.remove('show')
})

overlayClose.addEventListener('click', e => {
    if (e.target.classList.contains('overlay__popup')) {
        popup.classList.remove('show')
    }
})

let basicTickets = 0;
let sum = 0;

plusBtn.addEventListener('click', function() {
    basicInput.value++
    checkTickets()  
    console.log(sum);
    return basicTickets += 1;
})

function checkTickets() {
    // if (basicInput.value+1 >= 1) {
        price.innerHTML = basicInput.value * 20
        return sum = basicInput.value * 20
    // }
}

radioBtns.forEach(e => { 
    e.addEventListener('click', el => {
        if (!(el.target.classList.contains('active')) && el.target.classList.contains('radio--permament')) {
            price.innerHTML = sum
            radioBtns.forEach(e => e.classList.remove('active'))
            el.target.classList.add('active')
        }
        if (!(el.target.classList.contains('active')) && el.target.classList.contains('radio--temporary')) {
            price.innerHTML = sum * 1.25
            radioBtns.forEach(e => e.classList.remove('active'))
            el.target.classList.add('active')
        }
        if (!(el.target.classList.contains('active')) && el.target.classList.contains('radio--combined')) {
            price.innerHTML = sum * 2
            radioBtns.forEach(e => e.classList.remove('active'))
            el.target.classList.add('active')
        }
    })
})