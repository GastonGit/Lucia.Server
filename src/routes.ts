import { Router } from 'express';
import mangaRouter from './routes/manga';
import galleryRouter from './routes/gallery';

const routes = Router();

routes.use('/gallery', galleryRouter);
routes.use('/manga', mangaRouter);

export default routes;
