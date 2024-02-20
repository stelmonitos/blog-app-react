import { useSelector } from "react-redux";
import { getAllPosts } from "../../redux/postsRedux";
import { Link } from "react-router-dom";
import { CardGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
const Posts = () => {
    const posts = useSelector(getAllPosts);
    return (
        <>
        
            {posts.map(post => (
                <Row className="g-4">
                <Card border="secondary" style={{ width: '18rem'}} className="rounded mx-3">
                <aritcle className="m-3" to={`/post/${post.id}`} key={post.id}>
                    <h5>{post.title}</h5>
                    <span><strong>Author: </strong></span>{post.author}<br />
                    <span><strong>Published date: </strong></span>{post.publishedDate}<br />
                    <p>{post.shortDescription}</p>
                    <Link to={`/post/${post.id}`}>
                        <button>Read More</button>
                    </Link>
                </aritcle>
                </Card>
                </Row>
            ))}
       
        </>
    );
};

export default Posts;