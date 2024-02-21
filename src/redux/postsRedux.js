//selectors
export const getPostById = ({ posts }, id) => posts.find(post => post.id === id);
export const getAllPosts = ({ posts }) => posts;
;
// actions
const createActionName = actionName => `app/posts/${actionName}`;

// action creators
const postReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default postReducer;