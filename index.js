import * as b from 'bobril';
import * as Counter from './counter';

b.init(() => {
    return {tag: 'div', children: [
        {tag: 'h1', children: 'Bobman'},
        {tag: 'p', children: 'This is simple javascript app.'},
        {tag: 'p', children: 'Lets play with component:'},
        Counter.create()
    ]};
})