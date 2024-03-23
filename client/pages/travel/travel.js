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
            try {
                const response = await fetch("http://localhost:3000/travel");
                const data = await response.json();
                this.destinations = data["transport"];

                let uniqueDestinationsFilter = [];
                for (let i = 0; i < this.destinations.length; i++) {
                    uniqueDestinationsFilter.push(this.destinations[i]["city"]);
                }
                this.uniqueDestinations = this.removeDuplicateDestinations(uniqueDestinationsFilter);
            } catch (error) {
                console.log("Erro ao buscar dados: " + error);
            }
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
        selectDestination(destination) {
            this.selectedDestination = destination;
            this.closeDiv("destinationOptionsBox");
        },
        verifyFields() {
            if (this.selectedDate && this.selectedDestination != "") {
                this.createBestTravels();
            } else {
                this.showDiv("errorDialog");
            }
        },
        showDiv(div) {
            document.querySelector(`.${div}`).style.display = "flex";
        },
        closeDiv(div) {
            document.querySelector(`.${div}`).style.display = "none";
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
        this.closeDiv("destinationOptionsBox");
    }
});

app.mount('#app');
