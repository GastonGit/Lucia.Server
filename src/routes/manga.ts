import { Router, Request, Response } from 'express';
const mangaRouter = Router();
import db from '../../database/db';

mangaRouter.get('/', async (req: Request, res: Response) => {
    const queryID = req.query.id;
    let id = 1;

    if (typeof queryID === 'string' && !Number.isNaN(parseInt(queryID))) {
        id = parseInt(queryID);
    }

    const pureManga = await db.getManga(id);

    if (pureManga !== null) {
        const images = pureManga.images.map(
            (image) =>
                process.env.SERVER_URL +
                '/media/' +
                pureManga.information.directory +
                '/' +
                pureManga.information.bucket +
                '/' +
                image,
        );

        const thumbnails = pureManga.thumbnails.map(
            (thumb) =>
                process.env.SERVER_URL +
                '/media/' +
                pureManga.information.directory +
                '/thumbnails/' +
                thumb,
        );

        res.send([
            {
                title: pureManga.information.title,
                author: pureManga.information.author,
                images: images,
                thumbnails: thumbnails,
            },
        ]);
    } else {
        res.send([]);
    }
});

export default mangaRouter;
