import {
  Application,
} from './package.ts';

const app = new Application();

app.use(ctx => {
  ctx.response.body = "Hello World 🦕";
});

await app.listen({ hostname: '0.0.0.0', port: 8000 });
