import { Request } from "express"
import { UserDocument } from "../api/user/user.model"

export  interface AuthTypes extends Request{
  user?: UserDocument ;

}
