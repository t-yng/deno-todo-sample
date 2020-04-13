import { Router, BodyType } from '../package.ts';
import { Todo } from './db/models/todo.ts';
export const router = new Router();

router
    .get('/', (ctx) => {
        ctx.response.body = 'Hello, World 🦕';
    })
    .get('/api/todos', async (ctx) => {
        const todos = await Todo.list();
        ctx.response.body = JSON.stringify({ todos });
    })
    .delete('/api/todos/:id', async (ctx) => {
        await Todo.delete(Number(ctx.params.id));
        ctx.response.status = 204;
    })
    .put('/api/todos/:id', async (ctx) => {
        const id = ctx.params.id;
        // Warning: リクエストBodyは英字のみ有効
        // 日本語をBodyに含めると文字化けが発生して内部のJOSN.parse()でエラーが発生する
        const body = await ctx.request.body();

        // Content-Type: appliacation/json 以外は受け付けない
        if (body.type !== BodyType.JSON) {
            ctx.response.status = 400;
            ctx.response.body = 'Content-Type is not application/json';
            return;
        }

        const { content } = body.value;
        await Todo.update({
            id: Number(id),
            content: content,
        });

        ctx.response.status = 204;
    })
    .post('/api/todos', async (ctx) => {
        // Warning: リクエストBodyは英字のみ有効
        // 日本語をBodyに含めると文字化けが発生して内部のJOSN.parse()でエラーが発生する
        const body = await ctx.request.body();

        // Content-Type: appliacation/json 以外は受け付けない
        if (body.type !== BodyType.JSON) {
            ctx.response.status = 400;
            ctx.response.body = 'Content-Type is not application/json';
            return;
        }

        // {"content": "xxxxx"}
        const todo = body.value;
        await Todo.insert({
            content: todo.content,
        });

        ctx.response.status = 201;
    });
