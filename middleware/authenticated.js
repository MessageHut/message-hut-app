export default function ({ store, redirect, route }) {
    if (store.state.currentUser.username === "" && route.path !== "/login") {
        return redirect('/login')
    }
}