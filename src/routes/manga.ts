import { Router, Request, Response } from 'express';
const mangaRouter = Router();

import itemData from '../../db/itemData.json';

mangaRouter.get('/', async (_req: Request, res: Response) => {
    return res.redirect('/');
});

mangaRouter.get('/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    return res.json(itemData[id - 1]);
});

export default mangaRouter;
