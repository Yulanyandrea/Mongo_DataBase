import {Schema,model, Document} from 'mongoose';
import bcrypt from 'bcrypt';
import { userProfileType } from './user.types';

export interface UserDocument extends Document{
  firstName:string;
  lastName:string;
  phone:string;
  country:string;
  password:string;
  role:string;
  email:string;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  createdAt: Date;
  updateAt:Date;

  userProfile:userProfileType;
  comparePassword:(password:string)=>Promise<boolean>;

}

const UserSchema=new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
    uppercase: true,
  },
  phone:{
    type:String,
  },
  country:{
    type:String,
    enum:['COLOMBIA','ARGENTINA','BRASIL','PERU'],
    uppercase: true,
    default:'COLOMBIA'
  },
  password:{
    type:String,
    require:true,
    min:6,
  },
  role:{
    type:String,
    enum:['USER','ADMIN'],
    default:'USER',
  },
  email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    lowercase:true,
  },
  profilePicture:{
    type:String
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
},
  {
    timestamps:true,
    versionKey:false
  });

  UserSchema.virtual('userProfile').get(function fulldataUser(){
    const { firstName,lastName, country, email, role}=this
    return { firstName, lastName, country, email, role }
  })

  //middleware
  UserSchema.pre('save',async function save(next: Function){
    const user = this as UserDocument;
    try {
      if(!user.isModified('password')){
        return next()
      }
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(user.password, salt);

      user.password = hash;

    } catch (error:any) {
      next(error);
    }
  })



  //methods
  UserSchema.methods.comparePassword = async function comparePassword(this: UserDocument,candidatePassword:string, next:Function) {
    const user = this ;
   try {
    const isMatch = await bcrypt.compare(candidatePassword,user.password);
    return isMatch;
   } catch (error:any) {
    next(error)
    return false;

   }

  }

  const User=model<UserDocument>('User',UserSchema);
  export default User;

