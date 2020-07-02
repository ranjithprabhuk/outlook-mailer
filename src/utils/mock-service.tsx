import { setupWorker, rest } from 'msw';
import { APP_CONFIG } from './app.constants';

const baseUrl = APP_CONFIG.serviceBase;
// 2. Define request handlers and response resolvers.
export const worker = setupWorker(
    rest.post(`${baseUrl}validateUser`, (req, res, ctx) => {
        return res(
            ctx.delay(1000),
            ctx.status(100, 'Mocked status'),
            ctx.json({
                message: 'Mocked response JSON body',
                data: {
                    username: 'Ranjithprabhu',
                    name: 'Ranjithprabhu',
                    token: 'some_random_string',
                }
            }),
        );
    }),
);
