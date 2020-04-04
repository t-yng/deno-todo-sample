import {
  Application,
} from './package.ts';
import { router } from './router.ts';

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ hostname: '0.0.0.0', port: 8000 });
