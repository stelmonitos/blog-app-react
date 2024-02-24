import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editPost } from "../../redux/postsRedux";
import PostForm from "./PostForm";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostById } from '../../redux/postsRedux';
import { Navigate } from "react-router-dom";

const EditPostForm = () => {
    const { id } = useParams();
    const post = useSelector(post => getPostById(post, id));
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = post => {
      dispatch(editPost({ ...post, id}));
      navigate('/')
    };
    if (!post) {
        return <Navigate to="/" />;
      }

    return (
      <PostForm action={handleSubmit} title={post.title} author={post.author} shortDescription={post.shortDescription} content={post.content} publishedDate={post.publishedDate}  actionText="Edit post" />
    )
  };
  export default EditPostForm;