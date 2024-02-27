
export const getAllCategories = ({ categories }) => categories;
export const getCategoriesByPostId = ({ categories }, postId) => categories.filter(category => category.postId === postId);

const createActionName = name => `app/categories/${name}`;

const categoryReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
}

export default categoryReducer;