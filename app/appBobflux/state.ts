import * as flux from 'bobflux';

export interface ITodoAppState extends flux.IState {
    todos: string[];
    todoName: string;
};

export const todoAppCursor: flux.ICursor<ITodoAppState> = {
    key: ""
};

export const todosCursor: flux.ICursor<string> = {
    key: "todos"
};

export const todoNameCursor: flux.ICursor<string> = {
    key: "todoName"
};

export function createDefaultTodoAppState(): ITodoAppState {
    return {
        todos: ["wash clothes", "clean dishes", "lux"],
        todoName: "default todo name"
    };
}