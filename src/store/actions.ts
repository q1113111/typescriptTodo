import { Actions, ActionTypes, MutationsType, State } from 'interface'
import { ActionTree } from 'vuex'

const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms))

export const actions:ActionTree<State, State>&Actions = {
  async [ActionTypes.GetTodoItems] ({ commit }) {
    commit(MutationsType.SetLoading, true)
    await sleep(1000)
    commit(MutationsType.SetLoading, false)
    commit(MutationsType.SetItem, [])
  }
}
