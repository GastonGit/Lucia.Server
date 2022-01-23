import { Router, Request, Response } from 'express';
const exampleRouter = Router();

exampleRouter.get('/', (req: Request, res: Response) => {
    return res.json('Success');
});

export default exampleRouter;
