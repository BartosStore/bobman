import * as b from 'bobril';
import { Button } from './components/button';

export const pageMain = b.createComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode): void {
        me.children = [
            {tag: 'h1', children: 'Bobman', },
            {tag: 'p', children: 'This is page wrapper.'},
            Button({
                caption: "Counter",
                onHit: () => {
                    b.runTransition(b.createRedirectPush("counter"));
                    return true
                }
            }),
            Button({
                caption: "Todo List",
                onHit: () => {
                    b.runTransition(b.createRedirectPush("todo_list"));
                    return true
                }
            }),
            Button({
                caption: "Simple Page",
                onHit: () => {
                    b.runTransition(b.createRedirectPush("rest"));
                    return true
                }
            }),
            {tag: 'hr'},
            {tag: 'div', children: me.data.activeRouteHandler(), style: {backgroundColor: "#fcfcbd", padding: 10 }},
            {tag: 'hr'},
            {tag: 'p', children: 'End of wrapper.'},
        ],
        me.style = {
            margin: 10
        }
    }
});
