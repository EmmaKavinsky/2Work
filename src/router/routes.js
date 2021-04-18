// Global routes
let routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/Home.vue')
    },
    {
        path:'/register',
        name: 'register',
        component : () => import('@/pages/Register.vue')
    },
    {
        path:'/login',
        name:'login',
        component : () => import('@/pages/Login.vue')
    },
    {
        path:'/forget-password',
        name:'forgetPassword',
        component : () => import('@/pages/Forgotpassword.vue')
    },
    {
        path:'/reset-password',
        name:'Resetpassword',
        component : () => import('@/pages/Resetpassword.vue')
    },
    {
        path:'/profile',
        name:'Profile',
        component : () => import('@/pages/Profile.vue')
    },
    {
        path:'/edit-profile',
        name:'EditProfile',
        component : () => import('@/pages/EditProfile.vue')
    },
    {
        path:'/setting-password',
        name:'SettingPassword',
        component : () => import('@/pages/SettingPassword.vue')
    }

];


export default routes
