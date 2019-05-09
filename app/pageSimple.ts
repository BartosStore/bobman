import * as b from "bobril";
import { Button } from "./components/button";

interface IData {}

class RestCallerCtxStore extends b.BobrilCtx<IData> {
    private _pageText: string = "Simple empty page.";
    private _url: string = "https://api.github.com/repos/BartosStore/HeatingProject/contributors";

    constructor(data: IData) {
        super(data);
    }

    pageText = (): string => {
        return this._pageText;
    }
}

export const RestCaller = b.createComponent({
    id: "rest-caller",
    ctxClass: RestCallerCtxStore,
    render(ctx: RestCallerCtxStore, me: b.IBobrilNode): void {
        const text = ctx.pageText();
        me.children = [
            {tag: "h1", children: "Simple Page"},
            {tag: "p", children: "" },
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
