import { Router } from 'express';
import { userApiRoute } from './user.route';

export const apiRoute = Router();

apiRoute.use('/user', userApiRoute);
