const containerInner = document.querySelector('.container__inner');
const imgArray = [`assets/img/gallery/galery1.webp`, `assets/img/gallery/galery2.webp` ,`assets/img/gallery/galery3.webp`,
`assets/img/gallery/galery4.webp`, `assets/img/gallery/galery5.webp`, `assets/img/gallery/galery6.webp`,
`assets/img/gallery/galery7.webp`, `assets/img/gallery/galery8.webp`, `assets/img/gallery/galery9.webp`,
`assets/img/gallery/galery10.webp`, `assets/img/gallery/galery11.webp`, `assets/img/gallery/galery12.webp`,
`assets/img/gallery/galery13.webp`, `assets/img/gallery/galery14.webp`, `assets/img/gallery/galery15.webp`];
const windowInnerWidth = window.innerWidth;

function addImagesToPage() {
    imgArray.sort(() => Math.random() - 0.5);
    imgArray.forEach((element, index) => {
        let img = document.createElement("img");
        img.src = element;
        img.classList.add('gallery-img')
        img.alt = `galery${index}`;
        containerInner.append(img);
    });
}
addImagesToPage();

const images = document.querySelectorAll('.gallery-img')

function addMarginToColumnsImgs() {
    images.forEach((e) => {
        let img = e.getBoundingClientRect()
        let top = img.top + pageYOffset;
        e.addEventListener('click', (el) => {
            console.log(top);
        })
        if (windowInnerWidth > 1064) {
            if ((top == 4727) || (top == 4969)) {
                e.classList.add('img-margin')
            }
        }
        if (windowInnerWidth <= 1060) {
            if ((top == 4493) || (top == 4735)) {
                e.classList.add('img-margin')
            }
        }
    })
}
addMarginToColumnsImgs()


function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) {
                func.apply(context, args)
            }
        }
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args)
        }
    }
}

function checkSlide(e) {
    images.forEach(slideImage => {
        let box = slideImage.getBoundingClientRect();
        let top = box.top + pageYOffset;
        const slideAt = (window.scrollY + window.innerHeight) - slideImage.height / 2;
        const imageBottom = top + slideImage.height;
        const halfOfImage = slideAt > top;
        const notScrollPassed = window.scrollY < imageBottom;
        if (halfOfImage && notScrollPassed) {
            slideImage.classList.add('active');
        } else {
            slideImage.classList.remove('active');
        }
    })
    
}

window.addEventListener('scroll', debounce(checkSlide))