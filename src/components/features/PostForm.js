import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/postsRedux";
import { useState } from "react";

const PostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishedDate, setPublishedDate] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [content, setContent] = useState("");

    const handleAddPost = () => {
        dispatch(addPost({title, author, publishedDate, shortDescription}));
        
        navigate("/");
    };
    return (
        <form >
            Title:<br />
            <Form.Control type="string" className="my-2" value={title} onChange={e => setTitle(e.target.value)}  placeholder="Enter title" /><br />
            Author:<br />
            <Form.Control className="my-2" type="text" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Enter author" /><br />
            Published date:<br />
            <Form.Control className="my-2"  type="text" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} placeholder="Enter title" /><br />
            Short description:<br />
            <Form.Control className="my-2"  as="textarea" value={shortDescription} onChange={e => setShortDescription(e.target.value)} rows={3} placeholder="Enter short description" /><br />
            Main content:<br />
            <Form.Control className="my-2" as="textarea" value={content} onChange={e => setContent(e.target.value)} rows={5} placeholder="Enter main content" /><br />
            <Button className="justify-content-end" onClick={handleAddPost}>Add post</Button>
        </form>
    );
};

export default PostForm;