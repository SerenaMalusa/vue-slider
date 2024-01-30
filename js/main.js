const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            imgNumbers : [1,2,3,4,5],
            activeIndex : 0,
        }      
    }
});

app.mount('#app');