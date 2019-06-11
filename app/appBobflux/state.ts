import * as flux from 'bobflux'

export interface IRichTodo {
    label: string
    isDone: boolean
}

export interface ITodoAppState extends flux.IState {
    todoName: string
    richTodos: IRichTodo[]
}

export const todoAppCursor: flux.ICursor<ITodoAppState> = {
    key: '',
}

export const todoNameCursor: flux.ICursor<string> = {
    key: 'todoName',
}

export const richTodosCursor: flux.ICursor<IRichTodo> = {
    key: 'richtodos',
}

export function createDefaultTodoAppState(): ITodoAppState {
    return {
        todoName: '',
        richTodos: [
            {label: 'lux', isDone: false},
            {label: 'wash clothes', isDone: false},
            {label: 'clean dishes', isDone: false}
        ]
    }
}
