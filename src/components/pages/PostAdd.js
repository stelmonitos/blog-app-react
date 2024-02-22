import  PostForm  from "../features/PostForm";
import { Row, Col } from "react-bootstrap";

const AddPost = props => {
  return (
      <Row>
        <Col md={{ span: 6, offset: 3 }}><h1>Add post</h1><br /></Col>
        <Col md={{ span: 6, offset: 3 }}><PostForm postId={props.id} /></Col>
      </Row>
    
  );
}

export default AddPost;