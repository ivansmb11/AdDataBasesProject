export default {
    name: 'loans',
    component: () => import(/* webpackChunkName: "Loans Layout" */ '../layouts/LoansLayout.vue'),
    children: [
        {
            path: '',
            name: 'getLoan',
            component: () => import(/* webpackChunkName: "Get Loan" */ '../views/GetLoan')
        },
        {
            path: '/Home',
            name: 'Home',
            component: () => import(/* webpackChunkName: "My Loans" */ '../views/Home')
        },
        {
            path: '/myLoans',
            name: 'myLoans',
            component: () => import(/* webpackChunkName: "My Loans" */ '../views/MyLoans')
        },
        {
            path: '/myAccount',
            name: 'myAccount',
            component: () => import(/* webpackChunkName: "My Account" */ '../views/MyAccount')
        }
    ]
}
