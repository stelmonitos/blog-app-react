import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dateToStr from '../../utils/dateToStr';

const PostForm = ({ action, actionText, ...props }) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.date || new Date());
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = e => {
        e.preventDefault();
        const date = dateToStr(publishedDate);
        action({ title, author, date, shortDescription, content, actionText });
      };
      return (
        <>
        <form >
            Title:<br />
            <Form.Control type="string" className="my-2" value={title} onChange={e => setTitle(e.target.value)}  placeholder="Enter title" /><br />
            Author:<br />
            <Form.Control className="my-2" type="text" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Enter author" /><br />
            Published date:<br />
            <DatePicker className="my-2"  type="text" value={dateToStr(publishedDate)} onChange={setPublishedDate} placeholder="Enter title" /><br />
            Short description:<br />
            <Form.Control className="my-2"  as="textarea" value={shortDescription} onChange={e => setShortDescription(e.target.value)} rows={3} placeholder="Enter short description" /><br />
            Main content:<br />
            <ReactQuill theme='snow' value={content} onChange={setContent} placeholder="Enter main content" /><br />
            <Button className="justify-content-end" onClick={handleSubmit}>{actionText}</Button>
        </form>
        </>
      );
};    
    export default PostForm;
