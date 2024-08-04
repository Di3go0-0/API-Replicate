import express from 'express';
import imgRoutes from './routes/img.routes.js';
import languajeRoutes from './routes/languaje.routes.js';

const app = express();

app.use(express.json());

imgRoutes(app);
languajeRoutes(app);

export default app;