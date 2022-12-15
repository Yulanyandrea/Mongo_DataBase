import { DocumentDefinition, FilterQuery } from "mongoose";
import User, { UserDocument } from "./user.model";

export function getAllUsers(){
  return User.find({},{password:0})
}

export function getUserById(id:string){
  const user = User.findById(id);
  return user;
}

export function getUser(filter:FilterQuery<UserDocument>){
  const user = User.findOne(filter)
  return user;
}

export function getUserByField(country:string){
const userByCountry = User.find({country:country})
return userByCountry;
}

export function createUser(user:DocumentDefinition<Omit<UserDocument,'createdAt'| 'updateAt'>>){
  return User.create(user)
}

export function updateUser(id:string,user:DocumentDefinition<Omit<UserDocument,'createdAt'| 'updateAt'>>){
  const updateUser = User.findByIdAndUpdate(id,user,{new:true});
  return updateUser;
}

export function deleteUser(id:string){
  const deleteUser = User.findByIdAndDelete(id);
  return deleteUser
}
