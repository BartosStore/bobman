import * as b from 'bobril';

interface IData {
    login: string;
    url: string;
}

interface IContributorContext extends b.IBobrilCtx {
    data: IData;
}

export const Contributor = b.createComponent({
    id: "contributor",
    render(ctx: IContributorContext, me: b.IBobrilNode): void {
        me.children = [
            {tag: "p", children: "Contributor: " + ctx.data.login },
            {tag: "p", children: "Url: " + ctx.data.url }
        ]
    }
});