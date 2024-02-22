import { Link } from "react-router-dom";
import Posts from "../features/Posts";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <>
    <header className="row align-items-center">
      <h2 className="col-10">All posts</h2>
      <div className="col-2 d-flex justify-content-end">
      <Link to={`/post/add`}>
      <Button  variant="outline-primary">Add Post</Button>
      </Link>
      </div>
    </header>
    <div>
      <Posts />
    </div>
    </>
  );
};

export default Home;