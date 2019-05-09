import * as b from 'bobril';
import { pageMain } from './pageMain';
import { pageCounter } from './pageCounter';
import { PageTodoList } from './pageTodoList';
import { RestCaller } from './pageSimple';

b.routes(
    b.route({handler: pageMain}, [
        b.route({url: "/counter", name: "counter", handler: pageCounter}),
        b.route({url: "/todo-list", name: "todo_list", handler: PageTodoList}),
        b.route({url: "/simple", name: "simple", handler: RestCaller}),
        b.routeDefault({handler: pageCounter})
    ])
);