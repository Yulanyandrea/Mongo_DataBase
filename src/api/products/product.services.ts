import Product, { ProductDocument } from "./product.model";
import { DocumentDefinition } from "mongoose";

export function getAllProducts(){
  return Product.find({})
  // .populate({path:'createBy',select:'firstName lastName',strictPopulate: false });
}

export function getProductById(id:string){
  return Product.findById(id) .populate({ path: 'createdBy', select: ' firstName lastName ' })
}

export function createProduct(product:DocumentDefinition<Omit<ProductDocument,'createdAt'| 'updateAt'>>){
  return Product.create(product);
}

export function updateProduct(id:string,product:DocumentDefinition<Omit<ProductDocument,'createdAt'| 'updateAt'>>){
  return Product.findByIdAndUpdate(id,product,{new:true});
}

export function deleteProduct(id:string){
  return Product.findByIdAndRemove(id);
}

