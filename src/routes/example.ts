import { Router, Request, Response } from 'express';
const exampleRouter = Router();

exampleRouter.get('/', (_req: Request, res: Response) => {
    return res.json('Success');
});

export default exampleRouter;
