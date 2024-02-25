import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dateToStr from '../../utils/dateToStr';
import { useForm } from 'react-hook-form';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const [contentError, setContentError] = useState(true);
  const [dateError, setDateError] = useState(true);

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const handleSubmit = () => {
    
    setContentError(!content)
    setDateError(!publishedDate)
    
    if (content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content });
    }
  };
  return (
    <>
      <form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          Title:<br />
          <Form.Control
            {...register("title", { required: true, minLength: 3 })}
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text" placeholder="Enter title" className="my-2"
          />
          {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          Author:<br />
          <Form.Control
            {...register("author", { required: true, minLength: 3 })}
            value={author}
            onChange={e => setAuthor(e.target.value)}
            className="my-2" type="text" placeholder="Enter author"
          />
          {errors.author && <small className="d-block form-text text-danger mt-2">This field is required</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          Published date:<br />
          <DatePicker 
            className="my-2" 
            value={dateToStr(publishedDate)} 
            onChange={setPublishedDate} 
            placeholder="Enter title" />
          {dateError && <small className="d-block form-text text-danger mt-2">This field is required</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          Short description:<br />
          <Form.Control
            {...register("shortDescription", { required: true, minLength: 20 })}
            value={shortDescription}
            onChange={e => setShortDescription(e.target.value)} rows={3}
            className="my-2" as="textarea"
            placeholder="Enter short description" />
          {errors.shortDescription && <small className="d-block form-text text-danger mt-2">This field is required (min is 20)</small>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          Main content:<br />
          <ReactQuill 
          theme='snow' 
          value={content} 
          onChange={setContent} 
          placeholder="Enter main content" />
          {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
        </Form.Group><br />
        <Button className="justify-content-end" onClick={validate(handleSubmit)}>{actionText}</Button>
      </form>
    </>
  );
};
export default PostForm;
