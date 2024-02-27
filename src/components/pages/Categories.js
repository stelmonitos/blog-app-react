import { useSelector } from "react-redux";
import { getAllCategories } from "../../redux/categoriesRedux";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getPostByCategory } from "../../redux/postsRedux";

const Categories = () => {
    const categories = useSelector(getAllCategories);
    
    return (
        <section>
          <Container>
            <h1>All categories</h1>
            <ul>
            {categories.map(category => (
                <Link key={category.id} to={`/category/${category.name}`}>
                <li>{category.name}</li>
                </Link>
            ))}
        </ul>   
        </Container>
        </section>
    )
}
export default Categories;