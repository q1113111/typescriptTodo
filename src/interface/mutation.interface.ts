import { State, TodoItem } from 'interface'

export enum MutationsType {
    CreateItem = 'CREATE_ITEM',
    SetItem='SET_ITEM',
    CompleteItem='COMPLETE_ITEM',
    SetLoading='SET_LOADING'
}

export interface Mutations{
    [MutationsType.CreateItem](state:State, item:TodoItem):void,
    [MutationsType.SetItem](state:State, items:TodoItem[]):void,
    [MutationsType.CompleteItem](state:State, items:Partial<TodoItem>&{id:number}):void,
    [MutationsType.SetLoading](state:State, value:boolean):void
}
