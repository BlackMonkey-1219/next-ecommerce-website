import { ObjectId } from 'mongodb';

export type CreateSellerProfileRequest = {
  user_first_name: string;
  user_last_name: string;
  user_age: number;
  user_email: string;
  user_contact_number: string;
  user_country: string;
  user_state: string;
  user_city: string;
  user_postal_code: string;
  user_address: Array<string>;
  user_id: string;
  seller_nic: string;
};

export type GetSellerProfileRequest = {
  seller_id: string;
};

export type RemoveSellerProfileRequest = {
  seller_id: string;
};

export type UpdateSellerProfileRequest = {
  seller_id: string;
  seller_first_name: string;
  seller_last_name: string;
  seller_age: string;
  seller_nic: string;
  seller_email: string;
  seller_contact_number: string;
  seller_country: string;
  seller_state: string;
  seller_city: string;
  seller_postal_code: string;
  seller_address: Array<string>;
  seller_shop_id: string;
  seller_products: Array<string>;
};

export type SellerObjectData = {
  userFirstName: string;
  userLastName: string;
  userAge: number;
  userCountry: string;
  userState: string;
  userCity: string;
  userPostalCode: string;
  userAddress: Array<string>;
  userEmail: string;
  userContactNumber: string;
  _id: ObjectId;
  products: Array<ObjectId>;
  sellerRating: number;
  sellerNIC: string;
  shopId: ObjectId | undefined;
};

export type DataSellerDelete = {
  seller_id: string;
};
