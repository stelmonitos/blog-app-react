import { Button } from "react-bootstrap";
import { getPostById } from "../../redux/postsRedux";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { removePost } from "../../redux/postsRedux";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import dateToStr from "../../utils/dateToStr";

const SinglePost = () => {
  const { id } = useParams();
  const posts = useSelector(posts => getPostById(posts, id));
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const date = dateToStr(posts);

  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRemove = () => {
    dispatch(removePost(posts.id));
    setShow(false);
    
  };

  if (!posts) {
    return <Navigate to="/" />;
  }
  else return (
    <div className="container col-8">
      <div className="row">
        <h1 className="col-sm-9">{posts.title}</h1>
        <div className="col-sm-3">
          <div className="col d-flex">
            <Link to={`/post/edit/${posts.id}`} key={posts.id}>
            <Button className="me-2 col" variant="outline-info">Edit</Button>
            </Link>
            <Button variant="outline-danger" onClick={handleShow}>Delete</Button>
          </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Once you delete this post, it cannot be recovered.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleRemove}>
              Remove
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
      </div>
      <div>
        <p className="mb-0 mt-4"><strong>Author: </strong>{posts.author}</p>
        <strong>Published date: </strong>{dateToStr(date)}<br />
        <strong>Category: </strong>{posts.category}<br />
        <p className="mt-4" dangerouslySetInnerHTML={{ __html: posts.content}} />
      </div>
    </div>
    
  );
}

export default SinglePost;