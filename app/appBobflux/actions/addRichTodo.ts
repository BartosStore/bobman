import * as flux from 'bobflux'
import { todoAppCursor } from '../state'

export const addRichTodo = flux.createParamLessAction(todoAppCursor, state => {
    if (!state.todoName && state.todoName.trim().length === 0) return state

    return flux.shallowCopy(state, copy => {
        copy.richTodos = [...state.richTodos, {label: state.todoName, isDone: false}]
        copy.todoName = ''
    })
})

export default addRichTodo
