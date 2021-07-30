const progress = document.querySelectorAll('.progress');

progress.forEach(e => {
    e.addEventListener('input', function() {
        const value = this.value;
        this.style.background = `linear-gradient(to right, #24809E 0%, #24809E ${value}%, #fff ${value}%, white 100%)`
    });
});