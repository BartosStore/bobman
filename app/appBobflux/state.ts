import * as flux from 'bobflux'

export interface IRichTodo {
    label: string
    isDone: boolean
}

export interface ITodoAppState extends flux.IState {
    todos: string[]
    todoName: string
    richTodos: IRichTodo[]
}

export const todoAppCursor: flux.ICursor<ITodoAppState> = {
    key: '',
}

export const todosCursor: flux.ICursor<string> = {
    key: 'todos',
}

export const todoNameCursor: flux.ICursor<string> = {
    key: 'todoName',
}

export const richTodosCursor: flux.ICursor<IRichTodo> = {
    key: 'todoName',
}

export function createDefaultTodoAppState(): ITodoAppState {
    return {
        todos: ['wash clothes', 'clean dishes', 'lux'],
        todoName: '',
        richTodos: [{label: 'rich lux', isDone: false}]
    }
}
