
export const getAllCategories = ({ categories }) => categories;


const createActionName = name => `app/categories/${name}`;

const categoryReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
}

export default categoryReducer;