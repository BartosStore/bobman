import * as b from 'bobril'
import * as flux from 'bobflux'
import * as monitor from 'bobflux-monitor'
import * as m from 'bobril-m'
import { todoAppCursor, createDefaultTodoAppState } from './state'
import addTodo from './actions/addTodo';
import changeTodoName from './actions/changeTodoName';
import addRichTodo from './actions/addRichTodo';

export class AppBobflux extends b.Component<never> {
    static id: string = 'app-bob-flux'
    init(): void {
        flux.bootstrap(createDefaultTodoAppState(), {
            debugCallback: monitor.init(),
        })
    }
    render(): b.IBobrilChildren {
        const state = flux.getState(todoAppCursor)
        const todos = state.todos.map(t => {return b.styledDiv(
            m.Checkbox({
                children: t,
                action: () => {}
            }),
            taskStyle
        )});
        const richTodos = state.richTodos.map(t => {return b.styledDiv(
            m.Checkbox({
                children: t.label,
                checked: t.isDone,
                action: () => {}
            }),
            taskStyle
        )});
        return m.Paper({
            children: [
                b.styledDiv('Todo List', labelStyle),
                { tag: 'p', children: 'Todos (' + state.todos.length + '):' },
                todos,
                { tag: 'p', children: 'Rich Todos (' + state.richTodos.length + '):' },
                richTodos,
                m.TextField({value: state.todoName, hintText: "Todo name", onChange: (value) => changeTodoName(value)}),
                m.Button({
                    children: 'Add Task',
                    type: m.ButtonType.Raised,
                    feature: m.Feature.Secondary,
                    disabled: isActualTaskEmpty(state.todoName),
                    action: () => {
                        if (!isActualTaskEmpty(state.todoName)) {
                            addTodo();
                        }
                    }
                }),
                m.Button({
                    children: 'Add Rich Task',
                    type: m.ButtonType.Raised,
                    feature: m.Feature.Secondary,
                    disabled: isActualTaskEmpty(state.todoName),
                    action: () => {
                        if (!isActualTaskEmpty(state.todoName)) {
                            addRichTodo();
                        }
                    }
                })
            ],
            style: {
                margin: margin,
                padding: padding,
            }
    })
    }
}

function isActualTaskEmpty(todoName: string): boolean {
    return todoName.trim() === ''
}

const margin = 16
const padding = 16
const labelStyle = b.styleDef({ fontSize: 18, textAlign: 'left' })
const taskStyle = b.styleDef({ textAlign: 'left' })

export default AppBobflux
