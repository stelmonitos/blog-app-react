import { useSelector } from "react-redux";
import { getAllPosts} from "../../redux/postsRedux";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import dateToStr from "../../utils/dateToStr";
const Posts = () => {
    const posts = useSelector(getAllPosts);

    return (
        <div className="row">
            {posts.map(post => (
                <div className="col-sm-12 col-md">
                <Card className={"rounded mt-3"}>
                    <aritcle className="m-3" to={`/post/${post.id}`} key={post.id}>
                        <h5>{post.title}</h5>
                        <span><strong>Author: </strong></span>{post.author}<br />
                        <span><strong>Published date: </strong></span>{dateToStr(post.publishedDate)}<br />
                        <span><strong>Category: </strong></span>{post.category}<br />
                        <p className="mt-3">{post.shortDescription}</p>
                        <Link to={`/post/${post.id}`} key={post.id}>
                            <Button>Read More</Button>
                        </Link>
                    </aritcle>
                </Card>
                </div>
            ))}
       
        </div>
    );
};

export default Posts;