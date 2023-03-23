export type AddProductRequest = {
  seller_id: string;
  product_name: string;
  product_description: string;
  product_category_id: string;
  product_varients: Array<ProductVarient>;
};

export type UpdateProductRequest = {
  product_id: string;
  product_name: string;
  product_description: string;
  product_category_id: string;
};

export type RemoveProductRequest = {
  product_id: string;
  seller_id: string;
};

export type ProductVarient = {
  varient_name: string;
  varient_description: string;
  varient_price: string;
};
