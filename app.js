const app = Vue.createApp({
    data() {
      return {
        firstName: 'Matias',
        lastName: 'Puletti',
        email: 'matias@gmail.com',
        gender: 'male',
        picture: 'https://media.licdn.com/dms/image/C4D03AQFrimArJMBVDg/profile-displayphoto-shrink_800_800/0/1637767692310?e=1711584000&v=beta&t=Rucq2h6hYXHVO6SSErUGijthHR5a3wrSYDi5SosFjKw',
      }
    },
    methods: {
     async getUser() {

        const res = await fetch('https://randomuser.me/api')

        const { results } =  await res.json()

       // console.log(results)


        this.firstName = results[0].name.first
        this.lastName = results[0].name.last
        this.email = results[0].email
        this.gender = results[0].gender
        this.picture = results[0].picture.large

      }
    }
})

app.mount('#app')