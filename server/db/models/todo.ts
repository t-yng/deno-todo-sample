import { client } from '../client.ts';

export interface Todo {
    id?: number;
    content: string;
}

export class Todo {
    static insert(todo: Todo) {
        client.query('INSERT INTO todos(content) values(?)', [todo.content]);
    }

    static update(todo: Todo) {
        client.execute('UPDATE todos SET content = ? WHERE id = ?', [
            todo.content,
            todo.id,
        ]);

        client.query('INSERT INTO todos(content) values(?)', [todo.content]);
    }

    static list() {
        return client.query(`select * from todos`);
    }

    static delete(id: number) {
        return client.execute(`DELETE FROM todos where id = ?`, [id]);
    }
}
