import {Router} from 'express';
import { handleAllGetUsers,
  handleGetUser,
  handleCreateUser ,
  handleUpdateUser,
  handleDeleteUser,
 } from './user.controller';
import { Authenticated } from '../../auth/auth.services'


const router=Router()

//RESFULL api

//get
router.get('/', handleAllGetUsers);

//get/api/users/:id
router.get('/:id', handleGetUser);

//post
router.post('/',handleCreateUser);

//patch
router.patch('/:id',Authenticated, handleUpdateUser);

//delete
router.delete('/:id',Authenticated,handleDeleteUser);



export default router;
