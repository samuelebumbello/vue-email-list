const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'List Email',
            url: 'https://flynn.boolean.careers/exercises/api/random/mail',
            email: '',

        }
    },

    methods:{
        getUrl(){
            axios.get(this.url)
            .then( res  => {
                this.email = res.data.response;
            })
        }
    },

    mounted() {
        this.getUrl()
    },
}).mount(#app)