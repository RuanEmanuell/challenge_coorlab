const app = Vue.createApp({
    data() {
        return {
            count: 0
        };
    },
    methods: {
        incrementCounter() {
            this.count++;
        }
    }
});

app.mount('#app');
