import jwt, { decode } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { getUser } from '../api/user/user.services';
import { UserDocument } from '../api/user/user.model';
import { AuthTypes } from './auth.types';

/**
 * return a JWT token by the app secret
 * @param payload object| string
 * @return token string
 *
 */

//sign token
const key=process.env.SECRET_TOKEN_APP as string

export function signToken(payload:any){
  const token= jwt.sign(payload,
    key,
    {expiresIn:'10h'},
    )
    return token;
}

//verify token
export function verifyToken(token:string): UserDocument | boolean {
  try {
    const decoded=jwt.verify(token,key) as UserDocument
    return decoded

  } catch (error) {
    return false
  }

}

// authenticated

export async function Authenticated(req:AuthTypes,res:Response,next:NextFunction){
  const token =req.headers?.authorization?.split(' ')[1];
  if(!token){
    return res.status(404).json({message:'Unauthorized'})
  }

  const decode=verifyToken(token) as UserDocument
    if(!decode){
      return res.status(401).json({message:'Unauthorize'})
    }


    const user= await getUser({ email: decode.email })

    if(!user){
      return res.status(401).json({message:'Unauthorized'})
    }

    req.user=user;

    next();
    return true
}
