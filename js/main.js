const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            imgNumbers : [1,2,3,4,5],
            activeIndex : 0,
            autoSlide : false
        }      
    },

    methods: {
        nextSlide() {
            this.activeIndex = (this.activeIndex >= this.imgNumbers.length - 1) ? 0 : this.activeIndex + 1;
        },
        prevSlide() {
            this.activeIndex = (this.activeIndex <= 0) ? this.imgNumbers.length - 1 : this.activeIndex - 1;
        },
        goToSlide(currentIndex) {
            this.activeIndex = currentIndex;
        },
        startAutoSlide() {
            this.autoSlide = setInterval (() => {
                this.nextSlide();
            }, 3000);
        },
        stopAutoSlide() {
            clearInterval(this.autoSlide);
        }
    },

    mounted() {
        this.startAutoSlide();
    }
});

app.mount('#app');