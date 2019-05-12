import * as b from "bobril";
import { RestCallerCtxStore } from "./restCallerCtxStore";
import { Button } from "../components/button";
import { Contributor } from "../components/contributor";

export const RestCaller = b.createComponent({
    id: "rest-caller",
    ctxClass: RestCallerCtxStore,
    render(ctx: RestCallerCtxStore, me: b.IBobrilNode): void {
        me.children = [
            {tag: "h1", children: "Simple Page"},
            {tag: "p", children: "Simple empty page." },
            // todo: render component for each contributor
            ctx.contributors().map(c => 
                Contributor({ login: c.login, url: c.url, contributions: c.contributions }), 
            ),
            Button({
                caption: "Next page",
                onHit: () => {
                    b.runTransition(b.createRedirectPush("counter"));
                    return true;
                }
            })
        ]
    }
});
