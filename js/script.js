const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'List Email',
            url: 'https://flynn.boolean.careers/exercises/api/random/mail',
            emails: [],
            limit: 10

        }
    },

    methods:{
        getUrl(){
            axios.get(this.url)
            .then( res  => {
                this.emails.push(res.data.response);
            })
        }
    },

    mounted() {
        for (let index = 0; index < this.limit; index++) {
            this.getUrl()
        }
    },
}).mount('#app')