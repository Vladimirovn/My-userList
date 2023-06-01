import { defineStore, setActivePinia } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('userStore', () => {
    const usersList = ref([
                            {
                                id: 1,
                                avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                                title: 'Brunch this weekend?',
                                subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
                                country: 'usa',
                                score: '10',
                                adress: 'SomeAdress.st 11'
                            },
                            // { divider: true, inset: true },
                            {
                                id: 2,
                                avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                                title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
                                subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
                                country: 'russia',
                                score: '9',
                                adress: 'SomeAdress.st 12'
                            },
                            // { divider: true, inset: true },
                            {
                                id: 3,
                                avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                                title: 'Oui oui',
                                subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
                                country: 'usa',
                                score: '10',
                                adress: 'SomeAdress.st 13'
                            },
                            // { divider: true, inset: true },
                            {
                                id: 4,
                                avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                                title: 'Birthday gift',
                                subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
                                country: 'russia',
                                score: '20',
                                adress: 'SomeAdress.st 14'
                            },
                            // { divider: true, inset: true },
                            {
                                id: 5,
                                avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                                title: 'Recipe to try',
                                subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
                                country: 'russia',
                                score: '5',
                                adress: 'SomeAdress.st 15'
                            },
                        ])
    const filters = ref({country: '', score: ''})
    const loader = ref(false)
    const users = ref(usersList.value)

    //  Подготовка к загрузке из базы --------------------------------->
    // const getUsers = async () => {
    //     const res = await fetch('https://some URL.com/....')
    //     const data = await res.json()
    //     usersList.value = data.results
    // }

    const filterUser = ()=> {
        loader.value = true
        setTimeout(() => {
            for(let [key,val] of Object.entries(filters.value)){
                if(filters.value[key] != ''){
                    console.log(filters.value[key]);
                    users.value = usersList.value.filter(el=>el[key] === filters.value[key])
                }
            }
            loader.value = false
        }, 1000);
    }

    const resetFilter = () => {
        users.value = usersList.value
    }
    


    return {usersList, filters, loader, users, filterUser, resetFilter}
})