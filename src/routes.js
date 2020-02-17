import { Router } from 'express';
// import User from './app/models/user';
import UserController from './app/controller/UserController';
import SessionController from './app/controller/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.get('/users', UserController.pegar);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

// routes.get('/', async (req, res) => {
//     const user = await User.create({
//         name: 'giuliano',
//         email: 'gbucci@uol.com.br',
//         password_hash: '123456',
//     });

//     return res.json(user);
// });

export default routes;
