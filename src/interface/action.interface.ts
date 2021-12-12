import { ActionContext } from 'vuex'
import { State, Mutations } from 'interface'

export enum ActionTypes{
    GetTodoItems='GET_ITEM_LIST'
}
type ActionsArgs = Omit<ActionContext<State, State>, 'commit'>&{
        commit<k extends keyof Mutations>(
            key:k,
            payload:Parameters<Mutations[k]>[1]
        ):ReturnType<Mutations[k]>
}

export interface Actions {
    [ActionTypes.GetTodoItems](context:ActionsArgs):void
}
