import * as b from 'bobril';

interface IContext extends b.IBobrilCtx {
    counter: number
}

export const create = b.createComponent<IContext>({
    init(ctx: IContext) {
        ctx.counter = 0;
        setInterval(() => {
            ctx.counter++;
            b.invalidate(ctx);
        }, 1000);
    },
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = ctx.counter;
        b.style(me, {fontSize: 25})
    }
});