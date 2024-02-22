import { useSelector } from "react-redux";
import { getAllPosts } from "../../redux/postsRedux";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Posts = () => {
    const posts = useSelector(getAllPosts);
    return (
        <div className="row d-flex justify-content-flex-start">
            {posts.map(post => (
                <Card style={{ width: '30%'}} className="rounded mx-3 mt-3">
                <aritcle className="m-3" to={`/post/${post.id}`} key={post.id}>
                    <h5>{post.title}</h5>
                    <span><strong>Author: </strong></span>{post.author}<br />
                    <span><strong>Published date: </strong></span>{post.publishedDate}<br />
                    <p className="mt-3">{post.shortDescription}</p>
                    <Link to={`/post/${post.id}`} key={post.id}>
                        <Button>Read More</Button>
                    </Link>
                </aritcle>
                </Card>
            ))}
       
        </div>
    );
};

export default Posts;