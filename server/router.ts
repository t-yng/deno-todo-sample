import { Router } from '../package.ts';
import { client } from './db.ts';

export const router = new Router();

router
    .get('/', (ctx) => {
        ctx.response.body = 'Hello, World 🦕';
    })
    .get('/api/todos', async (ctx) => {
        const todos = await client.query(`select * from todos`);

        ctx.response.body = JSON.stringify({ todos });
    });
