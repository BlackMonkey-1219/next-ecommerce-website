export type AddUserRequest = {
  user_first_name: string;
  user_last_name: string;
  user_birthday: string;
  user_email: string;
  user_contact_number: string;
  user_country: string;
  user_state: string;
  user_city: string;
  user_postal_code: string;
  user_address: Array<string>;
};

export type GetUserRequest = {
  user_id: string;
};

export type UpdateUserRequest = {
  user_id: string;
  user_first_name: string;
  user_last_name: string;
  user_age: string;
  user_email: string;
  user_contact_number: string;
  user_country: string;
  user_state: string;
  user_city: string;
  user_address: Array<string>;
  user_postal_code: string;
};

export type RemoveUserRequest = {
  user_id: string;
};

export type GetCartRequest = {
  user_id: string;
};

export type UpdateCartRequest = {
  user_id: string;
  cart_items: Array<{ product_id: string; product_count: number }>;
};
