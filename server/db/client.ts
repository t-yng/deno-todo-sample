import { Client } from 'https://deno.land/x/mysql/mod.ts';

export const client = await new Client().connect({
    hostname: 'mysql',
    username: 'admin',
    password: 'admin',
    db: 'app',
});
