export const state = () => ({
    currentUser: {
        username: ''
    }
})

export const mutations = {
    setUsername(state, username) {
        state.currentUser.username = username
    },

    removeUsername(state) {
        state.currentUser.username = ''
    }
}