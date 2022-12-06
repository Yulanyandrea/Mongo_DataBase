import {Schema,model} from 'mongoose';

const UserSchema=new Schema({
  name:{
    type:String,
    require:true,
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
},
  {
    timestamps:true,
  })

  const User=model('User',UserSchema);
  export default User;

