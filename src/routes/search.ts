import { Router, Request, Response } from 'express';
const searchRouter = Router();
import db from '../../database/db';

searchRouter.get('/', async (req: Request, res: Response) => {
    const queryTitle = req.query.title;
    const queryPage = req.query.page;
    let page = 1;

    if (typeof queryPage === 'string' && !Number.isNaN(parseInt(queryPage))) {
        page = parseInt(queryPage);
    }

    if (typeof queryTitle === 'string') {
        const foundMangas = await db.findMangaByTitleOrTag(queryTitle, page);
        res.send(foundMangas);
    } else {
        res.status(400).send('Bad request');
    }
});

export default searchRouter;
