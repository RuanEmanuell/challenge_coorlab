import { StandardButton } from '../../utils/components.js';

const app = Vue.createApp({
    data() {
        return {
            selectedDestination: "",
            selectedDate: "",
            destinations: []
        };
    },
    methods: {
        async getData() {
            const response = await fetch("http://localhost:5000/travel");
            const data = await response.json();
            this.destinations = data["transport"];
        },
        showDestinations(){
            const options = document.querySelectorAll(".destinationOption");
            for(let i = 0; i<options.length; i++){
                options[i].style.display = "flex";
            }
        },
        selectDestination(destination){
            this.selectedDestination = destination["city"];
            const options = document.querySelectorAll(".destinationOption");
            for(let i = 0; i<options.length; i++){
                options[i].style.display = "none";
            }
        }
    },
    mounted: function () {
        this.getData();
    }
});

app.component('standart-button', StandardButton);

app.mount('#app');
