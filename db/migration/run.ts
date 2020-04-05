import { Client, readFileStr } from '../../package.ts';

const client = await new Client().connect({
    hostname: '127.0.0.1',
    username: 'admin',
    password: 'admin',
    db: 'app',
});

const dir = import.meta.url.replace('/run.ts', '').replace('file://', '');
// eslint-disable-next-line no-undef
const files = Deno.readdirSync(dir);

files.forEach(async (file) => {
    if (file.name == null) return;
    if (!file.name.includes('.sql')) return;
    const sql = await readFileStr(`${dir}/${file.name}`);
    client.execute(sql);
});
