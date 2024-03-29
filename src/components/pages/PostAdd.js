import  AddPostForm  from "../features/AddPostForm";
import { Row, Col } from "react-bootstrap";

const AddPost = props => {
  return (
      <Row >
        <Col md={{ span: 6, offset: 3 }}><h1 className="p-0">Add post</h1><br /></Col>
        <Col md={{ span: 6, offset: 3 }}><AddPostForm className="p-0" postId={props.id} /></Col>
      </Row>
    
  );
}

export default AddPost;