import type { Controller } from "../types";

type Todo = {
    id: string
    title: string
    completed: boolean
};

const todos: Todo[] = [];

export const todoController = {
    getTodos: async () => {
        return {
            status: 201,
            body: todos
        };
    },
    createTodo: async ({ body: { title, completed } }) => {
        const newTodo = {
            id: Date.now().toString(),
            title,
            completed
        };

        todos.push(newTodo);

        return {
            status: 201,
            body: newTodo
        };
    }
} satisfies Controller;
