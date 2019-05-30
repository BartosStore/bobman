import * as b from 'bobril'
import * as Counter from './components/counter'
import { Button } from './components/button'

export class pageCounter extends b.Component<{}> {
    static id: string = 'counter'
    render(): b.IBobrilChildren {
        return [
            { tag: 'h1', children: 'Counter' },
            { tag: 'p', children: 'Lets play with counter:' },
            Counter.create(),
            Button({
                caption: 'Next page',
                onHit: () => {
                    b.runTransition(b.createRedirectPush('todo_list'))
                    return true
                },
            }),
        ]
    }
}
