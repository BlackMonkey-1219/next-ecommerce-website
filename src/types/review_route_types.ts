export type AddReviewRequest = {
  user_id: string;
  product_id: string;
  rating: string;
  review: string;
};

export type GetReviewRequest = {
  user_id?: string;
  product_id?: string;
  review_id?: string;
  rating?: string;
};

export type RemoveReviewRequest = {
  review_id: string;
};
