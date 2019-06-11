import * as b from 'bobril'
import * as flux from 'bobflux'
import * as monitor from 'bobflux-monitor'
import * as m from 'bobril-m'
import { todoAppCursor, createDefaultTodoAppState } from './state'
import changeTodoName from './actions/changeTodoName';
import addRichTodo from './actions/addRichTodo';
import checkTodo from './actions/checkTodo';

export class AppBobflux extends b.Component<never> {
    static id: string = 'app-bob-flux'
    init(): void {
        flux.bootstrap(createDefaultTodoAppState(), {
            debugCallback: monitor.init(),
        })
        // todo: download github data
    }
    render(): b.IBobrilChildren {
        const state = flux.getState(todoAppCursor);
        const richTodos = state.richTodos.map(t => {return b.styledDiv(
            m.Checkbox({
                children: t.label,
                checked: t.isDone,
                action: () => {
                    checkTodo(t.label)
                }
            }),
            taskStyle
        )});
        // todo: display downloaded github data
        // todo: rename todo list to issue tracker for github repo
        return m.Paper({
            children: [
                b.styledDiv('Todo List', labelStyle),
                { tag: 'p', children: 'Rich Todos (' + state.richTodos.length + '):' },
                richTodos,
                m.TextField({value: state.todoName, hintText: "Todo name", onChange: (value) => changeTodoName(value)}),
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
