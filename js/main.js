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
        },
        prevSlide() {
            this.activeIndex--;
        }
    }
});

app.mount('#app');