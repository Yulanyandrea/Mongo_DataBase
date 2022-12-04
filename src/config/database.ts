import mongoose from "mongoose";

async function conectDb(){
  const uri= "mongodb+srv://Yulany:dFw3Ex2H2TURcTKX@cluster0.ypklcwn.mongodb.net/test";
  try {
    await mongoose.connect(uri)
    console.log('connected to database')
  } catch (error) {
    console.log(error)

  }
}


export default conectDb;
