import { Mutations, MutationsType } from '../interface/mutation.interface'
import { State } from '../interface/state.interface'
import { MutationTree } from 'vuex'

export const mutations:MutationTree<State> & Mutations = {
  [MutationsType.CreateItem] (state, item) {
    state.todoList.unshift(item)
  },
  [MutationsType.SetItem] (state, items) {
    state.todoList = items
  },
  [MutationsType.CompleteItem] (state, newItem) {
    const item = state.todoList.findIndex(item => item.id)
    if (item === -1) return
    state.todoList[item] = { ...state.todoList[item], ...newItem }
  },
  [MutationsType.SetLoading] (state, value) {
    state.loading = value
  }
}
