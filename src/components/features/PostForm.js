import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const PostForm = ({ action, actionText, ...props }) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content });
      };
      return (
        <>
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
            <Button className="justify-content-end" onClick={handleSubmit}>Add post</Button>
        </form>
        </>
      );
};    
    export default PostForm;
