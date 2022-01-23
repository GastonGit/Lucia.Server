import express, { Application } from 'express';
import routes from './routes';
import helmet from 'helmet';
import cors from 'cors';

const app: Application = express();
const PORT = process.env.PORT || 8000;

const corsOptions = {
    origin: '*',
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

app.listen(PORT, (): void => {
    console.log(`Server Running at https://localhost:${PORT}`);
});
