export type CreateShopRequest = {
  seller_id: string;
  shop_name: string;
  shop_description: string;
  shop_contact_number: string;
  shop_email: string;
};

export type UpdateShopRequest = {
  shop_id: string;
  shop_name: string;
  shop_description: string;
  shop_contact_number: string;
  shop_email: string;
};

export type RemoveShopRequest = {
  shop_id: string;
};

export type AddRackRequest = {
  shop_id: string;
  rack_name: string;
  rack_items: Array<string>;
};

export type UpdateRackRequest = {
  shop_id: string;
  rack_id: string;
  rack_name: string;
  rack_items: Array<string>;
};

export type RemoveRackRequest = {
  shop_id: string;
  rack_id: string;
};
