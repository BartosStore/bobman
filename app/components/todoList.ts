import * as b from 'bobril';
import * as m from 'bobril-m';

interface ITask {
    description: string;
    isDone: boolean;
}

interface IContext extends b.IBobrilCtx {
    tasks: ITask[];
    newTask: ITask;
}

export const create = b.createComponent<IContext>({
    init(ctx: IContext) {
        ctx.tasks = [
            createTask("Paint bathroom", false),
            createTask("Repair sledge", true),
            createTask("Cook dinner for girlfriend", false)
        ];
        ctx.newTask = createTask("", false);
        setInterval(() => {
            b.invalidate(ctx);
        }, 1000);
    },
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = m.Paper({
            children: [
                b.styledDiv('Todo List')
            ]
        });
    }
})

function createTask(description: string, isDone: boolean) {
    return {description, isDone}
}