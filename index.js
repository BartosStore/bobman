import * as b from 'bobril';

b.init(() => {
    return {tag: 'div', children: [
        {tag: 'h1', children: 'Bobman'},
        {tag: 'p', children: 'This is simple javascript app.'},
        {tag: 'p', children: 'Lets play...'}
    ]};
})