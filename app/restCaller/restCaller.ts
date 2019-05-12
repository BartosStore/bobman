import * as b from "bobril";
import { Button } from "../components/button";
import { RestCallerCtxStore } from "./restCallerCtxStore";

export const RestCaller = b.createComponent({
    id: "rest-caller",
    ctxClass: RestCallerCtxStore,
    render(ctx: RestCallerCtxStore, me: b.IBobrilNode): void {
        me.children = [
            {tag: "h1", children: "Simple Page"},
            {tag: "p", children: "Simple empty page." },
            {tag: "p", children: "Contributor: " + ctx.contributorLogin() },
            {tag: "p", children: "Url: " + ctx.contributorUrl() },
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
