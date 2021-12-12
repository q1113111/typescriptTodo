export interface TodoItem {
    id:number,
    task:string,
    completed:boolean
}

export interface State{
    loading:boolean,
    todoList:TodoItem[]
}
