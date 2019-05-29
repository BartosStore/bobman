import * as b from 'bobril'
import * as m from 'bobril-m'

interface ITask {
    description: string
    isDone: boolean
}

interface IContext extends b.IBobrilCtx {
    tasks: ITask[]
    newTask: ITask
}

export const create = b.createComponent<IContext>({
    init(ctx: IContext) {
        ctx.tasks = [
            createTask('Paint bathroom', false),
            createTask('Repair sledge', true),
            createTask('Cook dinner for girlfriend', false),
        ]
        ctx.newTask = createTask('', false)
        setInterval(() => {
            b.invalidate(ctx)
        }, 1000)
    },
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = m.Paper({
            children: [
                b.styledDiv('Todo List', labelStyle),
                b.styledDiv(
                    ctx.tasks.map((task, i) =>
                        b.styledDiv(
                            m.Checkbox({
                                children: getTaskView(task),
                                checked: task.isDone,
                                action: () => {
                                    task.isDone = !task.isDone
                                    b.invalidate(ctx)
                                },
                            }),
                            taskStyle
                        )
                    ),
                    taskListStyle
                ),
                m.TextField({
                    hintText: 'New task description',
                    value: ctx.newTask.description,
                    onChange: (value: string) => {
                        ctx.newTask.description = value
                        b.invalidate(ctx)
                    },
                }),
                m.Button({
                    children: 'Add Task',
                    type: m.ButtonType.Raised,
                    feature: m.Feature.Secondary,
                    disabled: isActualTaskEmpty(ctx),
                    action: () => {
                        if (!isActualTaskEmpty(ctx)) {
                            ctx.tasks = [ctx.newTask, ...ctx.tasks]
                            ctx.newTask = createTask('', false)
                            b.invalidate(ctx)
                        }
                    },
                }),
            ],
            style: {
                margin: margin,
                padding: padding,
            },
        })
    },
})

function createTask(description: string, isDone: boolean) {
    return { description, isDone }
}

function getTaskView(task: ITask): b.IBobrilChildren {
    return b.styledDiv(
        task.description,
        task.isDone && { textDecoration: 'line-through' }
    )
}

function isActualTaskEmpty(ctx: IContext): boolean {
    return ctx.newTask.description.trim() === ''
}

const margin = 16
const padding = 16
const taskListHeight = 120
const taskListStyle = b.styleDef({
    paddingTop: padding,
    paddingBottom: padding,
    height: taskListHeight,
    overflow: 'auto',
})
const labelStyle = b.styleDef({ fontSize: 18, textAlign: 'left' })
const taskStyle = b.styleDef({ textAlign: 'left' })
