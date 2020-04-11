import { Router, BodyType } from '../package.ts';
import { client } from './db.ts';
export const router = new Router();

router
    .get('/', (ctx) => {
        ctx.response.body = 'Hello, World 🦕';
    })
    .get('/api/todos', async (ctx) => {
        const todos = await client.query(`select * from todos`);
        ctx.response.body = JSON.stringify({ todos });
    })
    .delete('/api/todos/:id', async (ctx) => {
        try {
            await client.execute(`DELETE FROM todos where id = ?`, [
                ctx.params.id,
            ]);
        } catch (error) {
            console.error(error);
            ctx.response.status = 500;
            ctx.response.body = 'Internal Server Error';
            return;
        }

        ctx.response.status = 204;
    })
    .post('/api/todos', async (ctx) => {
        let body;
        try {
            // Warning: リクエストBodyは英字のみ有効
            // 日本語をBodyに含めると文字化けが発生して内部のJOSN.parse()でエラーが発生する
            body = await ctx.request.body();
        } catch (error) {
            console.error(error);
            ctx.response.status = 500;
            ctx.response.body = 'Internal Server Error';
            return;
        }

        // Content-Type: appliacation/json 以外は受け付けない
        if (body.type !== BodyType.JSON) {
            ctx.response.status = 400;
            ctx.response.body = 'Content-Type is not application/json';
            return;
        }

        // {"content": "xxxxx"}
        const todo = body.value;

        try {
            await client.query('INSERT INTO todos(content) values(?)', [
                todo.content,
            ]);
        } catch (error) {
            console.error(error);
            ctx.response.status = 500;
            ctx.response.body = 'Internal Server Error';
            return;
        }

        ctx.response.status = 201;
    });
