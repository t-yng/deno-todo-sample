import { Router } from './package.ts';

export const router = new Router();

const todos = {
    todos: [
        {
            id: 1,
            content: 'タヌキとキツネの絵本を買う',
        },
        {
            id: 2,
            content: '漫画を捨てる',
        },
    ],
};

router
    .get('/', (ctx) => {
        ctx.response.body = 'Hello, World 🦕';
    })
    .get('/api/todos', (ctx) => {
        ctx.response.body = JSON.stringify(todos);
    });
