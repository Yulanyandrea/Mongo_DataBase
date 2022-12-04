import {getAllUsers,getUserByField,createUser,getUserById} from './user.services';

export async function handleAllGetUsers(req,res){
  try {
    const users=await getAllUsers();
    return res.status(200).json(users)

  } catch (error) {
    console.log(error)
    return res.status(500).json(error)

  }
}

export async function handleGetUserByField(req, res){
  const {country}=req.params;
  try {
    const users= await getUserByField(country);
    if(!users){
      return res.status(404).json({message:'user not found'})
    }
    return res.status(200).json()
  } catch (error) {

  }
}

export async function handleCreateUser(req,res){
  const data=req.body;
  try {
    const user= await createUser(data);
    return res.status(201).json(user);

  } catch (error) {
    return res.status(500).json(error.message)
  }
}

export async function handleGetUser(req,res){
  const {id}=req.params;
  try {
    const getUser=await getUserById(id);

  } catch (error) {

  }
}




