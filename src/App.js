import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Post from "./components/pages/Post";
import PostAdd from "./components/pages/PostAdd";
import PostEdit from "./components/pages/PostEdit";
import NotFound from "./components/pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/views/Footer";
import Header from "./components/views/Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/add" element={<PostAdd />} />
        <Route path="/post/edit/:id" element={<PostEdit />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
