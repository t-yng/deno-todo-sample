import { serve } from 'https://deno.land/std/http/server.ts';

const s = serve({
  hostname: '0.0.0.0',
  port: 8000
});

console.log('Start server 🦕');

for await (const req of s) {
  req.respond({ body: 'Hello World 🦕' });
}
