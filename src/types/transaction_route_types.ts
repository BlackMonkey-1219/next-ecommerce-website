export type CreateTransactionRequest = {
  user_id: string;
  shop_id: string;
  products: Array<{ product_id: string; product_count: string }>;
};

export type GetTransactionRequest = {
  user_id?: string;
  shop_id?: string;
  created_date?: string;
};
