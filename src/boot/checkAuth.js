export default async ({ store, router }) => {
  router.beforeEach((to, from, next) => {
    const isLogged = store.getters["auth/isLogged"];
    if ( !isLogged && to.path !== "/login" ){
        return next ({
          path: "/login"
        })
    }
    next();
  })
}
