import * as b from 'bobril'
import { pageMain } from './pageMain'
import { pageCounter } from './pageCounter'
import { PageTodoList } from './pageTodoList'
import { RestCaller } from './restCaller/restCaller'
import { RestCallerMobX } from './restCallerMobX/restCallerMobX'
import { AppBobflux } from './appBobflux/appBobflux'

// b.component - reduction for new component write / TSX
b.routes(
    b.route({ handler: pageMain }, [
        b.route({
            url: '/counter',
            name: 'counter',
            handler: b.component(pageCounter),
        }),
        b.route({
            url: '/todo-list',
            name: 'todo_list',
            handler: b.component(PageTodoList),
        }),
        b.route({
            url: '/rest',
            name: 'rest',
            handler: b.component(RestCaller),
        }),
        b.route({
            url: '/rest-mobx',
            name: 'rest_mobx',
            handler: b.component(RestCallerMobX),
        }),
        b.route({
            url: '/rest-bobflux',
            name: 'rest_bobflux',
            handler: b.component(AppBobflux),
        }),
        b.routeDefault({ handler: b.component(pageCounter) }),
    ])
)
