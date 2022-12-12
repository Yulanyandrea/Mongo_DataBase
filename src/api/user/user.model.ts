import {Schema,model, Document} from 'mongoose';

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

  userVirtualEnviroment:string;

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
    require:true,
    unique:true,
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
  passwordResetToken: String,
  passwordResetExpires: Date,
},
  {
    timestamps:true,
    versionKey:false
  })

  UserSchema.virtual('userVirtualEnviroment').get(function fulldataUser(){
    const {firstName,lastName, country, email, role}=this
    return { firstName, lastName, country, email, role }
  })

  const User=model<UserDocument>('User',UserSchema);
  export default User;

