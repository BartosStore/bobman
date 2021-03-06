import * as flux from 'bobflux'
import { todoAppCursor, ITodoAppState } from '../state'

export const changeTodoName = flux.createAction(
    todoAppCursor,
    (state: ITodoAppState, todoName: string): ITodoAppState => {
        if (todoName === state.todoName) return state

        return flux.shallowCopy(state, copy => {
            copy.todoName = todoName
        })
    }
)

export default changeTodoName
