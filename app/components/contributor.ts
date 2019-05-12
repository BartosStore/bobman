import * as b from 'bobril';

interface IData {
    login: string;
    url: string;
    contributions: number;
}

interface IContributorContext extends b.IBobrilCtx {
    data: IData;
}

export const Contributor = b.createComponent({
    id: "contributor",
    render(ctx: IContributorContext, me: b.IBobrilNode): void {
        me.children = [
            {tag: "p", children: ctx.data.login },
            {tag: "hr"},
            {tag: "p", children: "Url: " + ctx.data.url },
            {tag: "p", children: "Contributions: " + ctx.data.contributions }
        ],
        me.style = { backgroundColor: "#fcf111", padding: 10 }
    }
});