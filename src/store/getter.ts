import { Getters, State } from '../interface/index'
import { GetterTree } from 'vuex'

export const getters:GetterTree<State, State>&Getters = {
  completedCount (state:State):number {
    return state.todoList.filter(i => i.completed).length
  },
  totalCount (state:State):number {
    return state.todoList.length
  }
}
