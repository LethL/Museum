const exploreImgOverlay = document.querySelectorAll('.explore__photo--overlay');
const exploreSlider = document.querySelector('.explore__slider')
const explorePhoto = document.querySelector('.explore__photo-item')

function initComparisons() {
    for (let i = 0; i < exploreImgOverlay.length; i++) {
      compareImages(exploreImgOverlay[i]);
      
    }
    function compareImages(img) {
        let clicked = 0;
        /*get the width and height of the img element*/
        let imgWidth = img.offsetWidth;
        let imgHeigth = img.offsetHeight;
        /*set the width of the img element to 50%:*/
        img.style.width = (imgWidth / 2) + "px";
        /*position the slider in the middle:*/
        exploreSlider.style.top = (imgHeigth / 2) - (exploreSlider.offsetHeight / 2) + "px";
        exploreSlider.style.left = (imgWidth / 2) - (exploreSlider.offsetWidth / 2) + "px";
        /*execute a function when the mouse button is pressed:*/
        exploreSlider.addEventListener("mousedown", slideReady);
        /*and another function when the mouse button is released:*/
        window.addEventListener("mouseup", slideFinish);
        /*or touched (for touch screens:*/
        exploreSlider.addEventListener("touchstart", slideReady);
         /*and released (for touch screens:*/
        window.addEventListener("touchstop", slideFinish);
        function slideReady(e) {
            /*prevent any other actions that may occur when moving over the image:*/
            e.preventDefault();
            /*the slider is now clicked and ready to move:*/
            clicked = 1;
            /*execute a function when the slider is moved:*/
            window.addEventListener("mousemove", slideMove);
            window.addEventListener("touchmove", slideMove);
        }
        function slideFinish() {
            /*the slider is no longer clicked:*/
            clicked = 0;
        }
        function slideMove(e) {
            let pos;
            /*if the slider is no longer clicked, exit this function:*/
            if (clicked == 0) return false;
            /*get the cursor's x position:*/
            pos = getCursorPos(e)
            /*prevent the slider from being positioned outside the image:*/
            if (pos < 0) pos = 0;
            if (pos > imgWidth) pos = imgWidth;
            /*execute a function that will resize the overlay image according to the cursor:*/
            slide(pos);
        }
        function getCursorPos(e) {
            let a;
            let x = 0;
            e = e || window.event;
            /*get the x positions of the image:*/
            a = img.getBoundingClientRect();
            /*calculate the cursor's x coordinate, relative to the image:*/
            x = e.pageX - a.left;
            /*consider any page scrolling:*/
            x = x - window.pageXOffset;
            return x;
        }
        function slide(x) {
            /*resize the image:*/
            img.style.width = x + "px";
            /*position the slider:*/
            exploreSlider.style.left = img.offsetWidth - (exploreSlider.offsetWidth / 2) + "px";
        }
    }
}
document.addEventListener("DOMContentLoaded", initComparisons);