import { useSelector } from "react-redux";
import { getAllPosts } from "../../redux/postsRedux";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import style from "./Posts.module.scss";

const Posts = () => {
    const posts = useSelector(getAllPosts);
    return (
        <div className="row d-flex flex-wrap">
            {posts.map(post => (
                <Card className={`rounded mt-3 col-sm-12 col-md p-0 ${style.around}`}>
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