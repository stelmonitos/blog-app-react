import { Button } from "react-bootstrap";
import { getPostById } from "../../redux/postsRedux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  
  const { id } = useParams();
  const posts = useSelector(posts => getPostById(posts, id));
  if (!posts) {
    return (
      <div className="container text-center">
        <h1>Post not found :( </h1>
      </div>
    );
  }
  return (
    <div className="container col-6">
      <div className="row">
        <h1 className="col-md-9">{posts.title}</h1>
        <div className="col-md-3">
        <Button className="me-2" variant="outline-info">Edit</Button>
        <Button variant="outline-danger">Delete</Button>
        </div>
      </div>
      <div>
        <p className="mb-0 mt-4"><strong>Author: </strong>{posts.author}</p>
        <strong>Published date: </strong>{posts.publishedDate}<br />
        <p className="mt-4">{posts.content}</p>
      </div>
    </div>
  );
}

export default SinglePost;