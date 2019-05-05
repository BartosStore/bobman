import * as b from 'bobril';
import * as Counter from './components/counter';
import { Button } from './components/button';

export const pageCounter = b.createComponent({
    render(ctx: b.IBobrilCtx, me: b.IBobrilNode): void {
        me.children = [
            {tag: 'h1', children: 'Counter', },
            {tag: 'p', children: 'Lets play with counter:'},
            Counter.create(),            
            Button({
                caption: "Next page",
                onHit: () => {
                    b.runTransition(b.createRedirectPush("todo_list"));
                    return true
                }
            })
        ]
    }
});
