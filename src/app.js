import express from 'express';
import imgRoutes from './routes/img.routes.js';

const app = express();

app.use(express.json());

imgRoutes(app);

export default app;