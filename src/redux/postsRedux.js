//selectors
export const getPostById = ({ posts }, id) => posts.find(post => post.id === id);
export const getAllPosts = ({ posts }) => posts;
;
// actions
const createActionName = actionName => `app/posts/${actionName}`;
const REMOVE_POST = createActionName('REMOVE_POST');

// action creators
export const removePost = payload => ({ payload, type: REMOVE_POST });
const postReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return statePart.filter(post => post.id !== action.payload);
    default:
      return statePart;
  };
};

export default postReducer;