const carouselArr = [];

class Carousel {
    static currentImageIndex = 0;
    static intervalId = null;

    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static resetTimer() {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(() => this.Next(carouselArr), 2500); 
    }

    static Next(arr) {
        this.currentImageIndex++;
        if (this.currentImageIndex >= arr.length) {
            this.currentImageIndex = 0;
        }
        this.displaySlide(arr);
    }

    static NextManual() {
        this.Next(carouselArr);
        this.resetTimer();
    }

    static Prev() {
        this.currentImageIndex--;
        if (this.currentImageIndex < 0) {
            this.currentImageIndex = carouselArr.length - 1;
        }
        this.displaySlide(carouselArr);
        this.resetTimer();
    }

    static displaySlide(arr) {
        const carouselDiv = document.getElementById('carousel');
        const titleDiv = document.getElementById('carousel-title');
        if (!carouselDiv || !titleDiv) {
            console.error("Elementos do carrossel não encontrados.");
            clearInterval(this.intervalId);
            return;
        }
        carouselDiv.classList.add('fading');
        setTimeout(() => {
            const imageHtml = `<a href="${arr[this.currentImageIndex].url}"><img src="img/${arr[this.currentImageIndex].image}" /></a>`;
            const titleHtml = `<a href="${arr[this.currentImageIndex].url}">${arr[this.currentImageIndex].title}</a>`;
            carouselDiv.innerHTML = imageHtml;
            titleDiv.innerHTML = titleHtml;
            setTimeout(() => {
                carouselDiv.classList.remove('fading');
            }, 10); 
        }, 500);
    }
    static Start(arr) {
        this.displaySlide(arr); 
        this.intervalId = setInterval(() => {
            this.Next(arr);
        }, 2500); 
    }
}