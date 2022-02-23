import { Router, Request, Response } from 'express';
const indexRouter = Router();
import db from '../../database/db';

indexRouter.get('/', async (_req: Request, res: Response) => {
    const manga = await db.getGallery();
    res.send(manga);
});

indexRouter.get('/:page', async (req: Request, res: Response) => {
    const page = parseInt(req.params.page);
    const gallery = await db.getPage(page);
    const maxPageCount = await db.getMaxPageCount();

    res.send({ gallery: gallery, maxPageCount: maxPageCount });
});

export default indexRouter;
