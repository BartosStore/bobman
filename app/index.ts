import * as b from 'bobril';
import * as Counter from './components/counter';
import * as TodoList from './components/todoList';

b.init(() => {
    return {tag: 'div', children: [
        {tag: 'h1', children: 'Bobman'},
        {tag: 'p', children: 'Lets play with component Counter:'},
        Counter.create(),
        {tag: 'br'},
        {tag: 'p', children: 'Complex component Todo list:'},
        TodoList.create()
    ]};
})