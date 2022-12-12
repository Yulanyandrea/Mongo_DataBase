import Product, { ProductDocument } from "./product.model";

export function getAllProducts(){
  return Product.find({})
  // .populate({path:'createBy',select:'firstName lastName',strictPopulate: false });
}

export function getProductById(id){
  return Product.findById(id) .populate({ path: 'createdBy', select: ' firstName lastName ' })
}

export function createProduct(product){
  return Product.create(product);
}

export function updateProduct(id,product){
  return Product.findByIdAndUpdate(id,product,{new:true});
}

export function deleteProduct(id){
  return Product.findByIdAndRemove(id);
}

