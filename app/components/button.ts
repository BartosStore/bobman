import * as b from "bobril";

interface IData {
    caption: string;
    onHit: () => void;
}

interface IButtonCtx extends b.IBobrilCtx {
    data: IData;
}

export const Button = b.createComponent({
    render(ctx: IButtonCtx, me: b.IBobrilNode): void {
        me.tag = "button";        
        me.children = ctx.data.caption;        
        me.style = {
            marginRight: 10
        }
    },
    onClick(ctx: IButtonCtx): boolean {
        ctx.data.onHit();
        return true;
    }
});