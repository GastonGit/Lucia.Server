import { Router, Request, Response } from 'express';
const indexRouter = Router();
import itemData from '../../db/itemData.json';

indexRouter.get('/', (_req: Request, res: Response) => {
    res.send(itemData);
});

export default indexRouter;
