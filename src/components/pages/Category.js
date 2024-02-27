import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostByCategory } from "../../redux/postsRedux";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import dateToStr from "../../utils/dateToStr";


const Category = ()=> {
    const category = useParams();
    const posts = useSelector(state => getPostByCategory(state, category.name));
    console.log(posts);
    return (
        <div>
            <h1>Category: {category.name}</h1>
            <div>
            <div className="row">
            {posts.map(post => (
                <Card className="rounded mx-2 mt-3 col-sm-12 col-md p-0">
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
            ))}
       
        </div>
            </div>
        </div>
    );
}

export default Category;
