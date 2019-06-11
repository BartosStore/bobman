import * as b from 'bobril'
import * as flux from 'bobflux'
import * as monitor from 'bobflux-monitor'
import * as m from 'bobril-m'
import { todoAppCursor, createDefaultTodoAppState } from './state'
import { Button } from '../components/button';
import addTodo from './actions/addTodo';
import changeTodoName from './actions/changeTodoName';

export class AppBobflux extends b.Component<never> {
    static id: string = 'app-bob-flux'
    init(): void {
        flux.bootstrap(createDefaultTodoAppState(), {
            debugCallback: monitor.init(),
        })
    }
    render(): b.IBobrilChildren {
        const state = flux.getState(todoAppCursor)
        const todos = state.todos.map(t => {return {tag: 'p', children: "- " + t}})
        return [
            { tag: 'h1', children: 'test' },
            { tag: 'p', children: 'todoName: ' + state.todoName },
            { tag: 'p', children: 'Number of todos: ' + state.todos.length },
            { tag: 'p', children: 'Todos: ' },
            todos,
            m.TextField({value: state.todoName, hintText: "Todo name", onChange: (value) => changeTodoName(value)}),
            Button({
                caption: "Add",
                onHit: () => {addTodo()}
            })
        ]
    }
}

export default AppBobflux
