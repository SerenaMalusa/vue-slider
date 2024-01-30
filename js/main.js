const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            imgNumbers : [1,2,3,4,5],
            activeIndex : 0,
        }      
    },

    methods: {
        nextSlide() {
            this.activeIndex++;
            if (this.activeIndex >= this.imgNumbers.length) this.activeIndex = 0;
        },
        prevSlide() {
            this.activeIndex--;
            if (this.activeIndex < 0) this.activeIndex = this.imgNumbers.length - 1;
        },
        goToSlide(currentIndex) {
            this.activeIndex = currentIndex;
        }
    },

    mounted() {
        const autoSlide = setInterval (() => {
            this.nextSlide();
        }, 3000);
    }
});

app.mount('#app');