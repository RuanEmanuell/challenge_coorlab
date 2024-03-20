import { StandardButton } from '../../utils/components.js';

const app = Vue.createApp({
    data() {
        return {
            destination: "",
            date: "",
        };
    },
    methods: {
    }
});

app.component('standart-button', StandardButton);

app.mount('#app');
