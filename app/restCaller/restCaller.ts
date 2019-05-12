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
            Contributor({ login: ctx.contributorLogin(), url: ctx.contributorUrl() }),
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
