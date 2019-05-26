import * as b from "bobril";
import { RestCallerCtxStore } from "./restCallerCtxStore";
import { Button } from "../components/button";
import { Contributor } from "../components/contributor";

export const RestCaller = b.createComponent({
    id: "rest-caller",
    ctxClass: RestCallerCtxStore,
    render(ctx: RestCallerCtxStore, me: b.IBobrilNode): void {
        me.children = [
            {tag: "h1", children: "Github page with b.invalidate()"},
            Button({
                caption:"Download Heating Project",
                onHit: ctx.loadHeatingProjectData
            }),
            Button({
                caption:"Download Euler Dojo",
                onHit: ctx.loadEulerDojoData
            }),
            {tag: "p", children: "Data from Github project: " + ctx.repository() },
            ctx.contributors().map(c => 
                Contributor({ login: c.login, url: c.url, contributions: c.contributions }), 
            ),
            Button({
                caption: "Next page",
                onHit: () => {
                    b.runTransition(b.createRedirectPush("rest_mobx"));
                    return true;
                }
            })
        ]
    }
});
