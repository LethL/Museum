const volume = document.querySelector('#volume')
const player = document.querySelector('.video')
let video = player.querySelector('.video__content-item')
const toggleFS = player.querySelector('.player--fs')
const mute = player.querySelector('.player--volume')
const play = player.querySelector('.player--play')
const prev = player.querySelector('.player--prev')
const next = player.querySelector('.player--next')
const progress = document.querySelector('#progress')
const sliderPrev = document.querySelector('#sliderPrev')
const sliderNext = document.querySelector('#sliderNext')
const dotsSlider = document.querySelectorAll('.video__dots-slider-item')
const sliderLine = document.querySelector('.slider__line')
const forwardPlaybackBtn = document.querySelector('.fas.fa-forward')
const backwardPlaybackBtn = document.querySelector('.fas.fa-backward')
const playbackRateValue = document.querySelector('.rate')
const videoPoster = document.querySelector('.video__poster')
const videoPlayBtn = document.querySelector('.play')
let videoSlides = document.querySelectorAll('.slider__line-item')
let slider = []
const loudBtn = document.querySelector('.fas.fa-volume-up')
const muteBtn = document.querySelector('.fas.fa-volume-mute')

function togglePlay() {
    if (document.fullscreenElement) {
        return
    } else {
        if (video.paused) {
            video.play() 
            togglePlayBtn()
            hidePoster() 
        } else {
            video.pause()
            togglePlayBtn()
        }
    }
}

function togglePlayBtn () {
    const playBtn = document.querySelector('.fas.fa-play')
    const pauseBtn = document.querySelector('.fas.fa-pause')
    if (video.paused) {
        playBtn.style.display = 'block'
        pauseBtn.style.display = 'none'
        videoPlayBtn.classList.toggle('show')
    } else {
        playBtn.style.display = 'none'
        pauseBtn.style.display = 'block'
        videoPlayBtn.classList.toggle('show')
    }
}

video.addEventListener('click', togglePlay)
play.addEventListener('click', togglePlay)
videoPlayBtn.addEventListener('click', togglePlay, hidePoster)



function keys(e) {
    if (e.keyCode == 37) {
        video.currentTime -= parseFloat(10)
    } else if (e.keyCode == 39) {
        video.currentTime += parseFloat(10)
    } else if (e.keyCode == 32) {
        e.preventDefault()
        if (video.paused) {
            hidePoster()
            video.play()
            togglePlayBtn()
        } else {
            video.pause()
            togglePlayBtn()
        }
    } else if (e.keyCode == 77) {
        muteToggle()
        toggleMuteIcon()
    } else if (e.keyCode == 70) {
        toggleScreen()
    } else if (e.keyCode == 188) {
        backwardPlaybackRate()
    } else if (e.keyCode == 190) {
        forwardPlaybackRate()
    } else if (e.keyCode == 9) {
        e.preventDefault()
    }
}

window.addEventListener('keydown', keys)



function volumeUpdate() {
    video[this.name] = this.value
    if (this.value == 0) {
        muteBtn.style.display = 'block'
        loudBtn.style.display = 'none'
    } else {
        muteBtn.style.display = 'none'
        loudBtn.style.display = 'Block' 
    }
}
volume.addEventListener('mousemove', volumeUpdate)


function timeUpdate() {
    const percent = (video.currentTime / video.duration) * 100;
    progress.value = percent
    if (progress.value == 100) {
        togglePlayBtn()
        videoPlayBtn.classList.remove('show')
    }
}
video.addEventListener('timeupdate', timeUpdate)

let mousedown = false;

function scrub(e) {
    video.pause()
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = scrubTime
    video.play()
    togglePlayBtn()
    hidePoster()
    videoPlayBtn.classList.add('show')
}
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', () => {
    if (mousedown) {
        scrub()
    }
})
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)

volume.addEventListener('change', function() {
    const value = volume.value
    volume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value * 100}%, #fff ${value * 100}%, white 100%)`
})

video.addEventListener('timeupdate', function() {
    let value = progress.value
    progress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})

function toggleScreen() {
    if (!document.fullscreenElement) {
        video.requestFullscreen()
    }
    if (document.fullscreenElement) {
        document.exitFullscreen()
    }
}
toggleFS.addEventListener('click', toggleScreen)



function toggleMuteIcon () {
    if (volume.value == 0) {
        loudBtn.style.display = 'none'
        muteBtn.style.display = 'block'
    } else {
        loudBtn.style.display = 'block'
        muteBtn.style.display = 'none'
    }
}

function muteToggle () {
    if (volume.value != 0) {
        volume.value = 0
        video.volume = 0
        volume.style.background = 'linear-gradient(to right, #710707 0%, #710707 0%, #fff 0%, #fff 100%)'
        toggleMuteIcon()
    } else if (video.volume == 0) {
        volume.value = 0.5
        video.volume = 0.5
        volume.style.background = 'linear-gradient(to right, #710707 0%, #710707 50%, #fff 50%, #fff 100%)'
        toggleMuteIcon()
    }
}
mute.addEventListener('click', muteToggle)



sliderPrev.addEventListener('click', function () {
    prevVideo()
    togglePlayBtn()
    videoSliderPrev()
    clearPlaybackRate()
})
sliderNext.addEventListener('click', function () {
    nextVideo()
    togglePlayBtn()
    videoSliderNext()
    clearPlaybackRate()
})

let counter = 1

function nextVideo () {
    if (counter >= 4) {
        counter == 4
    } else {
        video.src  = `assets/video/video${counter}.mp4`
        setTimeout(clearProgress, 1)
        dotsSlider[`${counter}`].classList.add('active')
        videoPoster.src = `assets/video/poster${counter}.webp`
        showPoster()
        videoPlayBtn.classList.add('show')
        if (counter != 0) {
            dotsSlider[`${counter-1}`].classList.remove('active')
        }
        counter ++
    }    
}
function prevVideo () {
    if (counter <= 1) {
        counter == 1
    } else {
        video.src  = `assets/video/video${counter-2}.mp4`
        setTimeout(clearProgress, 1)
        dotsSlider[`${counter-1}`].classList.remove('active')
        dotsSlider[`${counter-2}`].classList.add('active')
        videoPoster.src = `assets/video/poster${counter-2}.webp`
        showPoster()
        videoPlayBtn.classList.add('show')
        counter --
    }
}



dotsSlider.forEach(e => {
    e.addEventListener('click', (el) => {
        dotsSlider.forEach(e => e.classList.remove('active'))
        if (el.target === dotsSlider[0]) {
            showPoster()
            videoPlayBtn.classList.remove('show')
            clearPlaybackRate()
            counter = 1
            video.src  = `assets/video/video0.mp4`
            videoPoster.src = `assets/video/poster0.webp`
            setTimeout(clearProgress, 1)
            el.target.classList.add('active')
            sliderLine.style.right = 0 + 'px'
            ofset = 0
        } if (el.target === dotsSlider[1]) {
            showPoster()
            videoPlayBtn.classList.remove('show')
            clearPlaybackRate()
            counter = 2
            video.src  = `assets/video/video1.mp4`
            videoPoster.src = `assets/video/poster1.webp`
            setTimeout(clearProgress, 1)
            el.target.classList.add('active')
            sliderLine.style.right = 494 + 'px'
            ofset = 494
        } if (el.target === dotsSlider[2]) {
            showPoster()
            videoPlayBtn.classList.remove('show')
            clearPlaybackRate()
            counter = 3
            video.src  = `assets/video/video2.mp4`
            videoPoster.src = `assets/video/poster2.webp`
            setTimeout(clearProgress, 1)
            el.target.classList.add('active')
            sliderLine.style.right = 988 + 'px'
            ofset = 988
        } if (el.target === dotsSlider[3]) {
            showPoster()
            videoPlayBtn.classList.remove('show')
            clearPlaybackRate()
            counter = 4
            video.src  = `assets/video/video3.mp4`
            videoPoster.src = `assets/video/poster3.webp`
            setTimeout(clearProgress, 1)
            el.target.classList.add('active')
            sliderLine.style.right = 1482 + 'px'
            ofset = 1482
        }
    })
})


let ofset = 0
function videoSliderNext () {
    if (ofset > 1120) {
        return
    }
    ofset += 494
    sliderLine.style.right = ofset + 'px'
}
function videoSliderPrev() {
    if (ofset < 10) {
        return
    }
    ofset -= 494
    sliderLine.style.right = ofset + 'px'
}


function forwardPlaybackRate() {
    if (video.playbackRate == 2.4) {
        return
    }
    video.playbackRate += 0.2
    playbackRateValue.innerHTML = `${video.playbackRate.toFixed(1)}x`
}
function backwardPlaybackRate() {
    if (video.playbackRate <= 0.3) {
        return
    }
    video.playbackRate -= 0.2
    playbackRateValue.innerHTML = `${video.playbackRate.toFixed(1)}x`
}
forwardPlaybackBtn.addEventListener('click', forwardPlaybackRate)
backwardPlaybackBtn.addEventListener('click', backwardPlaybackRate)

function clearPlaybackRate() {
    playbackRateValue.innerHTML = ''
}

function clearProgress() {
    this.progress.value = 0
    progress.style.background = 'linear-gradient(to right, #710707 0%, #710707 0%, #fff 0%, #fff 100%)'
}

function hidePoster() {
    videoPoster.style.display = 'none'
}

function showPoster() {
    videoPoster.style.display = 'block'
}


videoSlides.forEach(e => {
    e.addEventListener('click', el => {
        el.preventDefault()
        console.log(el.target);
    })
})