import VueRouter from 'vue-router'


import ContactsPage from '../pages/ContactsPage.vue'
import MainPage from '../pages/MainPage.vue'
import ServicesPage from '../pages/ServicesPage.vue'
import DocumentationPage from '../pages/DocumentationPage.vue'
import CustomersPage from '../pages/CustomersPage.vue'
import ObjectsPage from '../pages/ObjectsPage.vue'
import PartnersPage from '../pages/PartnersPage.vue'
import VacanciesPage from '../pages/VacanciesPage.vue'



export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: MainPage
        },

        {
            path: '/services/:id',
            name: 'Service',
            component: ServicesPage,

        },
        {
            path: '/documentation/',
            name: 'Documentation',
            component: DocumentationPage
        },
        {
            path: '/contacts/',
            name: 'Contacts',
            component: ContactsPage
        },
        {
            path: '/customers/',
            name: 'Customers',
            component: CustomersPage
        },
        {
            path: '/objects/',
            name: 'Objects',
            component: ObjectsPage
        },
        {
            path: '/partners/',
            name: 'Partners',
            component: PartnersPage
        },
        {
            path: '/vacancies/',
            name: 'Vacancies',
            component: VacanciesPage
        },

    ]
})