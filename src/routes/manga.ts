import { Router, Request, Response } from 'express';
const mangaRouter = Router();
import itemData from '../../database/itemData.json';
import db from '../../database/db';

mangaRouter.get('/', async (_req: Request, res: Response) => {
    res.send(itemData);
});

mangaRouter.get('/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const manga = await db.getManga(id);

    res.send(manga);
});

export default mangaRouter;
