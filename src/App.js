import About from "./components/pages/About";
import Home from "./components/pages/Home";
import SinglePost from "./components/pages/SinglePost";
import PostAdd from "./components/pages/PostAdd";
import PostEdit from "./components/pages/PostEdit";
import NotFound from "./components/pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/views/Footer";
import Header from "./components/views/Header";
import { Container } from "react-bootstrap";
import Categories from "./components/pages/Categories";
import Category from "./components/pages/Category";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/post/add" element={<PostAdd />} />
        <Route path="/post/edit/:id" element={<PostEdit />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
