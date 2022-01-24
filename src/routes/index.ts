import { Router, Request, Response } from 'express';
const indexRouter = Router();

indexRouter.get('/', (_req: Request, res: Response) => {
    res.send('Boiler!');
});

export default indexRouter;
