import { Middleware } from '@nuxt/types'

const authenticated: Middleware = ({ store, redirect, route }) => {
  if (store.state.currentUser.username === '' && route.path !== '/login') {
    return redirect('/login')
  }
}

export default authenticated
