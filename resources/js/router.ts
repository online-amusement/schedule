import { createRouter, createWebHistory } from 'vue-router'

// ページコンポーネントをインポートする
import Home from './components/home.vue';
import About from './components/about.vue';
import Login from './components/login.vue';


// VueRouterインスタンスを作成する
const router = createRouter({
    history: createWebHistory(),  // set BASE_URL
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/about",
            name: "About",
            component: About,
        },
        {
            path: "/login",
            name: "Login",
            component: Login,
        },
    ],
})


let authed : boolean = true;
router.beforeEach((to, from, next) => {
    if(false == authed && to.name !== 'Login'){
        next({ name: 'Login'})
    }else if(true == authed && to.name === 'Login'){
        next({ name: 'Home'})
    }else{
        next()
    }
})


// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router