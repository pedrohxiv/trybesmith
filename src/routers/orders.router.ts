import { Router } from 'express';
import ordersController from '../controllers/orders.controller';
import ordersValidation from '../middlewares/ordersValidation';

const router = Router();

router.get('/', ordersController.getAll);
router.post('/', ordersValidation, ordersController.create);

export default router;
