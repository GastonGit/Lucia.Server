import { Router, Request, Response } from 'express';
const galleryRouter = Router();
import db from '../../database/db';

galleryRouter.get('/', async (req: Request, res: Response) => {
    const queryPage = req.query.page;
    let page = 1;

    if (typeof queryPage === 'string' && !Number.isNaN(parseInt(queryPage))) {
        page = parseInt(queryPage);
    }

    const pureGallery = await db.getGallery(page);
    const maxPageCount = await db.getMaxPageCount();

    const gallery = [];
    for (let i = 0; i < pureGallery.length; i++) {
        if (pureGallery[i].active) {
            gallery.push({
                id: pureGallery[i].id,
                title: pureGallery[i].title,
                author: pureGallery[i].author,
                thumbnail:
                    process.env.SERVER_URL +
                    '/media/' +
                    pureGallery[i].directory +
                    '/' +
                    pureGallery[i].thumbnail,
            });
        }
    }

    res.send({ gallery: gallery, maxPageCount: maxPageCount });
});

export default galleryRouter;
