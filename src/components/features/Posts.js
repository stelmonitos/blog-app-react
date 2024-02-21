import { useSelector } from "react-redux";
import { getAllPosts } from "../../redux/postsRedux";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Posts = () => {
    const posts = useSelector(getAllPosts);
    return (
        <div className="row ">
            {posts.map(post => (
                <Card style={{ width: '26rem'}} className="rounded mx-2 mt-3 col">
                <aritcle className="m-3" to={`/post/${post.id}`} key={post.id}>
                    <h5>{post.title}</h5>
                    <span><strong>Author: </strong></span>{post.author}<br />
                    <span><strong>Published date: </strong></span>{post.publishedDate}<br />
                    <p>{post.shortDescription}</p>
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