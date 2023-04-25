import { Router } from 'express';
import userController from '../controllers/users.controller';
import userValidation from '../middlewares/userValidation';

const router = Router();

router.post('/', userValidation, userController.create);

export default router;
