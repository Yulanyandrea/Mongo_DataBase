import User from "./user.model";

export function getAllUsers(){
  return User.find({})
}

export function getUserById(id){
  const user=User.findById(id);
  return user;
}

export function getUserByField(country){
const userByCountry=User.find({country:country})
return userByCountry;
}

export function createUser(user){
  return User.create(user)
}
