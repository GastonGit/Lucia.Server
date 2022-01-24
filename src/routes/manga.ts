import { Router, Request, Response } from 'express';
const mangaRouter = Router();

mangaRouter.get('/:page', (req: Request, res: Response) => {
    const page = parseInt(req.params.page);
    return res.json(itemData[page - 1]);
});

const itemData = [
    {
        img: 'logo512.png',
        title: 'Breakfast',
        author: '@test',
        id: 1,
        images: ['logo512.png', 'logo512.png', 'logo512.png', 'logo512.png'],
    },
    {
        img: 'logo512.png',
        title: 'Burger',
        author: '@test',
        id: 2,
        images: ['logo512.png', 'logo512.png', 'logo512.png', 'logo512.png'],
    },
    {
        img: 'logo512.png',
        title: 'Camera',
        author: '@test',
        id: 3,
        images: ['logo512.png', 'logo512.png', 'logo512.png', 'logo512.png'],
    },
    {
        img: 'logo512.png',
        title: 'Coffee',
        author: '@test',
        id: 4,
        images: ['logo512.png', 'logo512.png', 'logo512.png', 'logo512.png'],
    },
    {
        img: 'logo512.png',
        title: 'Hats',
        author: '@test',
        id: 5,
        images: ['logo512.png', 'logo512.png', 'logo512.png', 'logo512.png'],
    },
    {
        img: 'logo512.png',
        title: 'Honey',
        author: '@test',
        id: 6,
        images: ['logo512.png', 'logo512.png', 'logo512.png', 'logo512.png'],
    },
    {
        img: 'logo512.png',
        title: 'Basketball',
        author: '@test',
        id: 7,
        images: ['logo512.png', 'logo512.png', 'logo512.png', 'logo512.png'],
    },
    {
        img: 'logo512.png',
        title: 'Fern',
        author: '@test',
        id: 8,
        images: ['logo512.png', 'logo512.png', 'logo512.png', 'logo512.png'],
    },
    {
        img: 'logo512.png',
        title: 'Mushrooms',
        author: '@test',
        id: 9,
        images: ['logo512.png', 'logo512.png', 'logo512.png', 'logo512.png'],
    },
    {
        img: 'logo512.png',
        title: 'Tomato basil',
        author: '@test',
        id: 10,
        images: ['logo512.png', 'logo512.png', 'logo512.png', 'logo512.png'],
    },
    {
        img: 'logo512.png',
        title: 'Sea star',
        author: '@test',
        id: 11,
        images: ['logo512.png', 'logo512.png', 'logo512.png', 'logo512.png'],
    },
    {
        img: 'logo512.png',
        title: 'Bike',
        author: '@test',
        id: 12,
        images: ['logo512.png', 'logo512.png', 'logo512.png', 'logo512.png'],
    },
    {
        img: 'logo512.png',
        title: 'Coffee',
        author: '@test',
        id: 13,
        images: ['logo512.png', 'logo512.png', 'logo512.png', 'logo512.png'],
    },
    {
        img: 'logo512.png',
        title: 'Hats',
        author: '@test',
        id: 14,
        images: ['logo512.png', 'logo512.png', 'logo512.png', 'logo512.png'],
    },
    {
        img: 'logo512.png',
        title: 'Honey',
        author: '@test',
        id: 15,
        images: ['logo512.png', 'logo512.png', 'logo512.png', 'logo512.png'],
    },
    {
        img: 'logo512.png',
        title: 'Basketball',
        author: '@test',
        id: 16,
        images: ['logo512.png', 'logo512.png', 'logo512.png', 'logo512.png'],
    },
    {
        img: 'logo512.png',
        title: 'Fern',
        author: '@test',
        id: 17,
        images: ['logo512.png', 'logo512.png', 'logo512.png', 'logo512.png'],
    },
    {
        img: 'logo512.png',
        title: 'Mushrooms',
        author: '@test',
        id: 18,
        images: ['logo512.png', 'logo512.png', 'logo512.png', 'logo512.png'],
    },
    {
        img: 'logo512.png',
        title: 'Tomato basil',
        author: '@test',
        id: 19,
        images: ['logo512.png', 'logo512.png', 'logo512.png', 'logo512.png'],
    },
    {
        img: 'logo512.png',
        title: 'Sea star',
        author: '@test',
        id: 20,
        images: ['logo512.png', 'logo512.png', 'logo512.png', 'logo512.png'],
    },
    {
        img: 'logo512.png',
        title: 'Bike',
        author: '@test',
        id: 21,
        images: ['logo512.png', 'logo512.png', 'logo512.png', 'logo512.png'],
    },
];

export default mangaRouter;
