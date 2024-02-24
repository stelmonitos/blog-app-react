import { Link } from "react-router-dom";
import Posts from "../features/Posts";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
    <Container>
    <header className="row align-items-center">
      <h2 className="col px-0">All posts</h2>
      <div className="col d-flex justify-content-end px-0">
      <Link to={`/post/add`}>
      <Button variant="outline-primary">Add Post</Button>
      </Link>
      </div>
    </header>
    <div>
      <Posts />
    </div>
    </Container>
    </>
  );
};

export default Home;