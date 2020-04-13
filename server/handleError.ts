// eslint-disable-next-line no-unused-vars
import { Context } from '../package.ts';

export const handleError = async (ctx: Context, next: () => Promise<void>) => {
    try {
        await next();
    } catch (error) {
        console.error(error);
        ctx.response.status = 500;
        ctx.response.body = 'Internal Server Error';
    }
};
