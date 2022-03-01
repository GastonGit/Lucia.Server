import { Router } from 'express';
import mangaRouter from './routes/manga';
import galleryRouter from './routes/gallery';
import searchRouter from './routes/search';

const routes = Router();

routes.use('/gallery', galleryRouter);
routes.use('/manga', mangaRouter);
routes.use('/search', searchRouter);

export default routes;
