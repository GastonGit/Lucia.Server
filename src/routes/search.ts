import { Router, Request, Response } from 'express';
const searchRouter = Router();
import db from '../../database/db';

searchRouter.get('/', async (req: Request, res: Response) => {
    const queryTitle = req.query.title;

    if (typeof queryTitle === 'string') {
        const foundMangas = await db.findMangaByTitle(queryTitle);

        res.send(foundMangas);
    } else {
        res.status(400).send('Bad request');
    }
});

export default searchRouter;
