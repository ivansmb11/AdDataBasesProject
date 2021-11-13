
export default {
    name: 'auth',
    component: () => import(/* webpackChunkName: "Auth Layout" */ '../layouts/AuthLayout.vue'),
    children: [
        {
            path: '',
            name: 'login',
            component: () => import(/* webpackChunkName: "Login" */ '../views/Login')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import(/* webpackChunkName: "Register" */ '../views/Register')
        }
    ]
}
