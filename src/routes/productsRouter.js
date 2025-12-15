import { Router } from 'express';
import { getAllProducts , getProductID , addProduct , deleteProducts} from '../controllers/productsControllers.js'
import { auth } from '../middlewares/authMiddleware.js';


const router = Router();

router.get('/products', getAllProducts);

router.get('/products/:id', getProductID);

router.post('/products/create', auth , addProduct);

router.delete('/products/:id', auth , deleteProducts);

export default router;