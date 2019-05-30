import * as b from 'bobril'
import * as TodoList from './components/todoList'
import { Button } from './components/button'

export class PageTodoList extends b.Component<never> {
    static id: string = 'todo-list'
    render(): b.IBobrilChildren {
        return [
            { tag: 'h1', children: 'Todo List' },
            { tag: 'p', children: 'Lets play with todo list:' },
            TodoList.create(),
            { tag: 'br' },
            Button({
                caption: 'Next page',
                onHit: () => {
                    b.runTransition(b.createRedirectPush('rest'))
                    return true
                },
            }),
        ]
    }
}
