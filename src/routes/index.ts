import { Router, Request, Response } from 'express';
const indexRouter = Router();
import db from '../../database/db';

indexRouter.get('/', async (_req: Request, res: Response) => {
    const manga = await db.getManga();
    res.send(manga);
});

export default indexRouter;
