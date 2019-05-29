import * as b from 'bobril'
import * as flux from 'bobflux'
import * as monitor from 'bobflux-monitor'
import { todoAppCursor, createDefaultTodoAppState } from './state'

export const AppBobflux = b.createComponent({
    id: 'app-bob-flux',
    init() {
        flux.bootstrap(createDefaultTodoAppState(), {
            debugCallback: monitor.init(),
        })
    },
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode): void {
        const state = flux.getState(todoAppCursor)
        me.children = [
            { tag: 'h1', children: 'test' },
            { tag: 'p', children: 'todoName: ' + state.todoName },
            { tag: 'p', children: 'todos: ' + state.todos.length },
            {
                tag: 'p',
                children:
                    'todo 1: ' +
                    state.todos[0] +
                    ',' +
                    state.todos[1] +
                    ',' +
                    state.todos[2],
            },
        ]
    },
})

export default AppBobflux
