import * as b from "bobril";
import { Button } from "./components/button";

export const PageSimple = b.createComponent({
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode): void {
        me.children = [
            {tag: "h1", children: "Simple Page"},
            {tag: "p", children: "Simple empty page."},
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
