import * as b from 'bobril'
import * as m from "bobril-m"
import { RestCallerCtxStore } from './restCallerCtxStore'
import { Button } from '../components/button'
import { Contributor } from '../components/contributor'

export class RestCaller extends RestCallerCtxStore {
    static id: string = 'rest-caller'
    render(): b.IBobrilChildren {        
        return [
            { tag: 'h1', children: 'Github page with b.invalidate()' },
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
            { tag: "hr" },
            m.Paper({
                children: [
                    b.styledDiv('Todo List', labelStyle),
                    { tag: 'p', children: 'Rich Todos (' + this.issues.length + '):' },
                    this.issues(),
                    m.TextField({value: this.defaultTitle(), hintText: "Issue title", onChange: this.setDefaultTitle}),
                    m.Button({
                        children: 'Add Issue',
                        type: m.ButtonType.Raised,
                        feature: m.Feature.Secondary,
                        disabled: isDefaultTitleEmpty(this.defaultTitle()),
                        action: () => {
                            if (!isDefaultTitleEmpty(this.defaultTitle())) {
                                this.addIssue();
                            }
                        }
                    })
                ],
                style: {
                    margin: margin,
                    padding: padding,
                }
        }),
            Button({
                caption: 'Next page',
                onHit: () => {
                    b.runTransition(b.createRedirectPush('rest_mobx'))
                    return true
                },
            }),
        ]
    }
}

function isDefaultTitleEmpty(todoName: string): boolean {
    return todoName.trim() === ''
}

const margin = 16
const padding = 16
const labelStyle = b.styleDef({ fontSize: 18, textAlign: 'left' })