import { Router } from 'express';
import { handleAllGetProducts,
handleGetProductById,
handleCreateProduct,
handleDeleteProduct,
handleUpdateProduct } from './product.controller';

const router=Router();

router.get('/',handleAllGetProducts);
router.get('/:id',handleGetProductById);
router.post('/',handleCreateProduct);
router.patch('/:id',handleUpdateProduct);
router.delete('/:id',handleDeleteProduct);

export default router;
