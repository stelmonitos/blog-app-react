import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { editPost, getPostById } from "../../redux/postsRedux";
import dateToStr from "../../utils/dateToStr";
import PostForm from "./PostForm";

const EditPostForm = () => {
const { id } = useParams();
    const post = useSelector(post => getPostById(post, id));
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const date = dateToStr(post.publishedDate);
    
    const handleSubmit = post => {
      dispatch(editPost({ ...post, id}));
      navigate('/')
    };
    if (!post) {
        return <Navigate to="/" />;
      }

    return (
      <PostForm action={handleSubmit} title={post.title} author={post.author} shortDescription={post.shortDescription} content={post.content} publishedDate={post.publishedDate} category={post.category}  actionText="Edit post" />
    )
  };
  export default EditPostForm;