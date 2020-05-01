
const routes = [
  {
    path: '/',
    component: () => import('layouts/appLayout.vue'),
    children: [
      { 
        path: '', 
        name: "Home",
        component: () => import('pages/Index.vue') 
      },
      { 
        path: 'login', 
        name: "Login",
        component: () => import('pages/loginPage.vue')
      },
      { 
        path: 'incomes', 
        name: "Incomes",
        component: () => import('pages/Incomes/incomesPage.vue')
      },
      { 
          path: 'incomes/create', 
          name: "IncomesCreate",
          component: () => import('pages/Incomes/incomesCreate.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
