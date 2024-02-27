import { useSelector } from "react-redux";
import { getAllCategories } from "../../redux/categoriesRedux";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

const Categories = () => {
    const categories = useSelector(getAllCategories);
    
    return (
        <section className="col-8 container">
            <h1>All categories</h1>
            
            {categories.map(category => (
                <Link key={category.id} to={`/category/${category.name}`}>
                    <ListGroup>
                    <ListGroup.Item className="text-primary">{category.name}</ListGroup.Item>
                    </ListGroup>
                </Link>
            ))}
          
        </section>
    )
}
export default Categories;