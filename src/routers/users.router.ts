import { Router } from 'express';
import userController from '../controllers/users.controller';

const router = Router();

router.post('/', userController.create);

export default router;
