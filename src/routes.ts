import { Router } from 'express';
import indexRouter from './routes/index';
import exampleRouter from './routes/example';

const routes = Router();

routes.use('/', indexRouter);
routes.use('/example', exampleRouter);

export default routes;
