import shortid from 'shortid';

//selectors
export const getPostById = ({ posts }, id) => posts.find(post => post.id === id);
export const getAllPosts = ({ posts }) => posts;
export const getPostByCategory = ({ posts, categories }, category) => {
  const filteredPosts = posts.filter(post => post.category === category);
  return filteredPosts || [];
}
// actions
const createActionName = actionName => `app/posts/${actionName}`;
const REMOVE_POST = createActionName('REMOVE_POST');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');

// action creators
export const removePost = payload => ({ payload, type: REMOVE_POST });
export const addPost = payload => ({ payload, type: ADD_POST });
export const editPost = payload => ({ payload, type: EDIT_POST });

const postReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return statePart.filter(post => post.id !== action.payload);
    case ADD_POST:
      return [...statePart,{ ...action.payload, id: shortid()}];
      case EDIT_POST:
       return statePart.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
    default:
      return statePart;
  };
};

export default postReducer;