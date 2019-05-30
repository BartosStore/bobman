import * as b from 'bobril'
import { RestCallerCtxStore } from './restCallerMobXCtxStore'
import { Button } from '../components/button'
import { Contributor } from '../components/contributor'

export class RestCallerMobX extends RestCallerCtxStore {
    static id: string = 'rest-caller-mob-x'
    render(): b.IBobrilChildren {
        return [
            { tag: 'h1', children: 'Github page with MobX' },
            Button({
                caption: 'Download Heating Project',
                onHit: this.loadHeatingProjectData,
            }),
            Button({
                caption: 'Download Euler Dojo',
                onHit: this.loadEulerDojoData,
            }),
            {
                tag: 'p',
                children: 'Data from Github project: ' + this.repository(),
            },
            this.contributors().map(c =>
                Contributor({
                    login: c.login,
                    url: c.url,
                    contributions: c.contributions,
                })
            ),
            Button({
                caption: 'Next page',
                onHit: () => {
                    b.runTransition(b.createRedirectPush('rest_bobflux'))
                    return true
                },
            }),
        ]
    }
}
