import { MutationTree } from 'vuex'

export const state = () => ({
  currentUser: {
    username: '',
  },
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_USERNAME(state, username: string) {
    state.currentUser.username = username
  },

  REMOVE_USERNAME(state) {
    state.currentUser.username = ''
  },
}
