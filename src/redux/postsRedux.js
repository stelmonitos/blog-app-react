import shortid from 'shortid';

//selectors
export const getPostById = ({ posts }, id) => posts.find(post => post.id === id);
export const getAllPosts = ({ posts }) => posts;

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const REMOVE_POST = createActionName('REMOVE_POST');
const ADD_POST = createActionName('ADD_POST');

// action creators
export const removePost = payload => ({ payload, type: REMOVE_POST });
export const addPost = payload => ({ payload, type: ADD_POST });
const postReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return statePart.filter(post => post.id !== action.payload);
    case ADD_POST:
      return [...statePart,{ ...action.payload, id: shortid()}];
    default:
      return statePart;
  };
};

export default postReducer;