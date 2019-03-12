import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './components/Register';
import Login from './components/Login';
import Songs from './components/Songs';
import AddSong from './components/AddSong';
import ViewSong from './components/ViewSong';

Vue.use(Router)

export default new Router({
        routes: [{
                        path: '/',
                        name: 'home',
                        component: Home
                },
                {
                        path: '/register',
                        name: 'register',
                        component: Register
                },
                {
                        path: '/login',
                        name: 'login',
                        component: Login
                },
                {
                        path: '/songs',
                        name: 'songs',
                        component: Songs
                },
                {
                        path: '/songs/add',
                        name: 'add-song',
                        component: AddSong
                },
                {
                        path: '/song/:id',
                        name: 'song',
                        component: ViewSong
                }
        ]
})
