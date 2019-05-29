import * as b from 'bobril'
import { pageMain } from './pageMain'
import { pageCounter } from './pageCounter'
import { PageTodoList } from './pageTodoList'
import { RestCaller } from './restCaller/restCaller'
import { RestCallerMobX } from './restCallerMobX/restCallerMobX'
import { AppBobflux } from './appBobflux/appBobflux'

b.routes(
    b.route({ handler: pageMain }, [
        b.route({ url: '/counter', name: 'counter', handler: pageCounter }),
        b.route({
            url: '/todo-list',
            name: 'todo_list',
            handler: PageTodoList,
        }),
        b.route({ url: '/rest', name: 'rest', handler: RestCaller }),
        b.route({
            url: '/rest-mobx',
            name: 'rest_mobx',
            handler: RestCallerMobX,
        }),
        b.route({
            url: '/rest-bobflux',
            name: 'rest_bobflux',
            handler: AppBobflux,
        }),
        b.routeDefault({ handler: pageCounter }),
    ])
)
