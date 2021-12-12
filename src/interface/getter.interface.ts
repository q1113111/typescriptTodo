import { State } from './state.interface'

export interface Getters {
    completedCount(state:State):number,
    totalCount(state:State):number
}
