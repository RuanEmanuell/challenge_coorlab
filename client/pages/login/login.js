const app = Vue.createApp({
    data() {
        return {
            email: "",
            password: "",
            confirmPassword: ""
        };
    },
    methods: {
        sendToHomePage() {
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

app.mount('#app');
