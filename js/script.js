const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'List Email',
            url: 'https://flynn.boolean.careers/exercises/api/random/mail',
            email: '',
            load: false
        }
    },

    methods:{
        getUrl(){
            axios.get(this.url)
            .then( res  => {
                this.email = res.data.response;
                this.load = true
            })
        }
    },

    mounted() {
        this.getUrl()
    },
}).mount('#app')