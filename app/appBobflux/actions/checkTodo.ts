import * as flux from 'bobflux'
import { todoAppCursor, ITodoAppState } from '../state'

export const checkTodo = flux.createAction(
    todoAppCursor,
    (state: ITodoAppState, todoName: string): ITodoAppState => {
        if (todoName === state.todoName) return state

        return flux.shallowCopy(state, copy => {
            const todoIndex = state.richTodos.findIndex(function(element) {
                return element.label === todoName;
            });
            const isDone = state.richTodos[todoIndex].isDone;
            copy.richTodos[todoIndex].isDone = !isDone;
        })
    }
)

export default checkTodo;
