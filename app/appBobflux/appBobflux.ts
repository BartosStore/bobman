import * as b from 'bobril'
import * as flux from 'bobflux'
import * as monitor from 'bobflux-monitor'
import { todoAppCursor, createDefaultTodoAppState } from './state'

export class AppBobflux extends b.Component<never> {
    static id: string = 'app-bob-flux'
    init(): void {
        flux.bootstrap(createDefaultTodoAppState(), {
            debugCallback: monitor.init(),
        })
    }
    render(): b.IBobrilChildren {
        const state = flux.getState(todoAppCursor)
        return [
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
    }
}

export default AppBobflux
