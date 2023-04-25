import { Router } from 'express';
import productsController from '../controllers/products.controller';
import productsValidation from '../middlewares/productsValidation';

const router = Router();

router.post('/', productsValidation, productsController.create);
router.get('/', productsController.getAll);

export default router;
