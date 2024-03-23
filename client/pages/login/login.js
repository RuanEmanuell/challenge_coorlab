import { StandardButton } from '../../utils/components.js';

const app = Vue.createApp({
    data() {
        return {
            email: "",
            password: "",
            confirmPassword: ""
        };
    },
    methods: {
        testingValues() {
            document.location.href = "../travel/travel.html";
        },
        preventPageReload() {
            document.querySelector("form").addEventListener("submit", function (event) {
                event.preventDefault();
            });
        },
    },
    mounted: function () {
        this.preventPageReload();
    }
});

app.component('standart-button', StandardButton);

app.mount('#app');
