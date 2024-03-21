import { StandardButton } from '../../utils/components.js';

const app = Vue.createApp({
    data() {
        return {
            selectedDestination: "",
            selectedDate: null,
            destinations: [],
            uniqueDestinations: [],
            bestTravelC: null,
            bestTravelE: null
        };
    },
    methods: {
        async getData() {
            const response = await fetch("http://localhost:5000/travel");
            const data = await response.json();
            this.destinations = data["transport"];

            let uniqueDestinationsFilter = [];
            for (let i = 0; i < this.destinations.length; i++) {
                uniqueDestinationsFilter.push(this.destinations[i]["city"]);
            }
            this.uniqueDestinations = this.removeDuplicateDestinations(uniqueDestinationsFilter);
        },
        removeDuplicateDestinations(arr) {
            let uniqueArray = [];
            for (let i = 0; i < arr.length; i++) {
                if (!uniqueArray.includes(arr[i])) {
                    uniqueArray.push(arr[i]);
                }
            }
            return uniqueArray;
        },
        showDestinations() {
            const options = document.querySelectorAll(".destinationOption");
            for (let i = 0; i < options.length; i++) {
                options[i].style.display = "flex";
            }
        },
        selectDestination(destination) {
            this.selectedDestination = destination;
            this.closeDestinations();
        },
        closeDestinations() {
            const options = document.querySelectorAll(".destinationOption");
            for (let i = 0; i < options.length; i++) {
                options[i].style.display = "none";
            }
        },
        verifyFields() {
            if (this.selectedDate && this.selectedDestination != "") {
                this.createBestTravels();
            } else {
                document.querySelector("dialog").style.display = "flex";
            }
        },
        closeDialog() {
            document.querySelector("dialog").style.display = "none";
        },
        createBestTravels() {
            const possibleTravelOptions = this.destinations.filter(destination => destination.city === this.selectedDestination);
            const bestCTravelOptions = possibleTravelOptions.sort((a, b) => a.duration.substring(0, a.duration.length - 1) - (b.duration.substring(0, b.duration.length - 1)));
            this.bestTravelC = bestCTravelOptions[0];
            const bestETravelOptions = possibleTravelOptions.sort((a, b) => parseFloat(a.price_econ.substring(3, a.price_econ.length)) - parseFloat(b.price_econ.substring(3, b.price_econ.length)));
            this.bestTravelE = bestETravelOptions[0];
        },
        clearAllValues() {
            this.selectedDestination = "",
                this.selectedDate = null,
                this.bestTravelC = null;
            this.bestTravelE = null;
        },
    },
    mounted: function () {
        this.getData();
    }
});

app.component('standart-button', StandardButton);

app.mount('#app');
