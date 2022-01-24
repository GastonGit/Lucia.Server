import { Router } from 'express';
import indexRouter from './routes/index';
import mangaRouter from './routes/manga';

const routes = Router();

routes.use('/', indexRouter);
routes.use('/manga', mangaRouter);

export default routes;
