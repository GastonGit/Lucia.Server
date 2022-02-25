import express, { Application } from 'express';
import routes from './routes';
import helmet from 'helmet';
import cors from 'cors';

const mediaPath = process.env.FILE_SERVER || '';
const app: Application = express();
const PORT = process.env.PORT || 8000;

const corsOptions = {
    origin: '*',
};

app.use('/media', express.static(mediaPath));
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

app.listen(PORT, (): void => {
    process.env.SERVER_URL = 'http://localhost:' + PORT;
    console.log(`Server Running at ${process.env.SERVER_URL}`);
});
