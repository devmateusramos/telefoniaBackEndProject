import 'reflect-metadata';

import express from 'express';

import './database';
import { routes } from './route';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3444, () => console.log('Server is running!'));
