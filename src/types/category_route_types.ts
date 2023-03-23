export type AddCategoryRequest = {
  category_name: string;
};

export type UpdateCategoryRequest = {
  category_id: string;
  category_name: string;
};

export type RemoveCategoryRequest = {
  category_id: string;
};
