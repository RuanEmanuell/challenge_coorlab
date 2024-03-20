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

app.component("standart-button", {
    props: ['buttonLabel'],
    template: `<button class="standartButton">{{buttonLabel}}</button>`
});

app.mount('#app');

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
});
