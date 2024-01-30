const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            imgNumbers : [1,2,3,4,5],
            activeIndex : 2,
        }      
    },

    methods: {
        addActiveClass(currentIdex) {
            let activeClass = currentIdex == this.activeIndex ? 'active':''; 
            return activeClass;
        }
    }
});

app.mount('#app');