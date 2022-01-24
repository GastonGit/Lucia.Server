import { Router, Request, Response } from 'express';
const indexRouter = Router();

indexRouter.get('/', (_req: Request, res: Response) => {
    res.send(itemData);
});

const itemData = [
    {
        img: 'logo512.png',
        title: 'Breakfast',
        author: '@test',
    },
    {
        img: 'logo512.png',
        title: 'Burger',
        author: '@test',
    },
    {
        img: 'logo512.png',
        title: 'Camera',
        author: '@test',
    },
    {
        img: 'logo512.png',
        title: 'Coffee',
        author: '@test',
    },
    {
        img: 'logo512.png',
        title: 'Hats',
        author: '@test',
    },
    {
        img: 'logo512.png',
        title: 'Honey',
        author: '@test',
    },
    {
        img: 'logo512.png',
        title: 'Basketball',
        author: '@test',
    },
    {
        img: 'logo512.png',
        title: 'Fern',
        author: '@test',
    },
    {
        img: 'logo512.png',
        title: 'Mushrooms',
        author: '@test',
    },
    {
        img: 'logo512.png',
        title: 'Tomato basil',
        author: '@test',
    },
    {
        img: 'logo512.png',
        title: 'Sea star',
        author: '@test',
    },
    {
        img: 'logo512.png',
        title: 'Bike',
        author: '@test',
    },
    {
        img: 'logo512.png',
        title: 'Coffee',
        author: '@test',
    },
    {
        img: 'logo512.png',
        title: 'Hats',
        author: '@test',
    },
    {
        img: 'logo512.png',
        title: 'Honey',
        author: '@test',
    },
    {
        img: 'logo512.png',
        title: 'Basketball',
        author: '@test',
    },
    {
        img: 'logo512.png',
        title: 'Fern',
        author: '@test',
    },
    {
        img: 'logo512.png',
        title: 'Mushrooms',
        author: '@test',
    },
    {
        img: 'logo512.png',
        title: 'Tomato basil',
        author: '@test',
    },
    {
        img: 'logo512.png',
        title: 'Sea star',
        author: '@test',
    },
    {
        img: 'logo512.png',
        title: 'Bike',
        author: '@test',
    },
];

export default indexRouter;
