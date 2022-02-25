import { Router, Request, Response } from 'express';
const galleryRouter = Router();
import db from '../../database/db';

galleryRouter.get('/', async (req: Request, res: Response) => {
    const queryPage = req.query.page;
    let page = 1;

    if (typeof queryPage === 'string' && !Number.isNaN(parseInt(queryPage))) {
        page = parseInt(queryPage);
    }

    const gallery = await db.getGallery(page);
    const maxPageCount = await db.getMaxPageCount();

    res.send({ gallery: gallery, maxPageCount: maxPageCount });
});

export default galleryRouter;
