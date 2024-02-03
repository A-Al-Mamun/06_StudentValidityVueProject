let app = Vue.createApp({
    data(){
        return{
            heading: "To Do List",
            resultTitle: "To Do Listing",
            inputText: null,
            inputTime: null,
            inputImportant: false,
            storeList: [
                {
                    text: "Wake up in the Morning",
                    time: "6 AM",
                    important: false,
                    found: false
                },
                {
                    text: "Sleep at night",
                    time: "10PM",
                    important: false,
                    found: true
                }
            ]
        }
    },
    methods: {
        addItem() {
            let item = {
                text: this.inputText,
                time: this.inputTime,
                found: false
            };
            this.storeList.push(item);
            this.inputText = null;
            this.inputTime = null;
        }
    }
});

app.mount('#app');