import * as b from 'bobril';
import * as TodoList from './components/todoList';
import { Button } from './components/button';

export const PageTodoList = b.createComponent({
    id: "todo-list",
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode): void {
        me.children = [
            {tag: 'h1', children: 'Todo List', },
            {tag: 'p', children: 'Lets play with todo list:'},
            TodoList.create(),
            {tag: 'br'},
            Button({
                caption: "Next page",
                onHit: () => {
                    b.runTransition(b.createRedirectPush("rest"));
                    return true
                }
            })
        ]
    }
});
