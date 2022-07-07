import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import blogPosts from '../blogPosts';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

function Create() {

  // Making usestate for setting and
  // fetching a value in jsx
  const [author, setauthor] = useState('');
  const [body, setbody] = useState('');
  const [title, settitle] = useState('');

  // Using useNavigation for redirecting to pages
  let history = useNavigate();

  // Function for creating a post/entry
  const handelSubmit = (e) =>{
    e.preventDefault(); // Prevent reload

    const ids = uuid() // Creating unique id
    let uni = ids.slice(0,8) // Slicing unique id

    // Fetching a value from usestate and
    // pushing to javascript object
    let a = author, b=body, c=title
    blogPosts.push({id:uni,author:a,body:b,title:c})


  // Redirecting to home page after creation done
  history('/')
    
  }

return (
  <div >
    <Form className="d-grid gap-2" style={{margin:'15rem'}}>

{/* Fetching a value from input textfirld
in a setauthor using usestate*/}
<Form.Group className="mb-3">
  <Form.Control onChange={e => setauthor(e.target.value)}
        type="text"
        placeholder="Enter Your Name" required/>
</Form.Group>

<Form.Group className="mb-3">
  <Form.Control onChange={e => settitle(e.target.value)}
        type="text"
        placeholder="Title" required/>
</Form.Group>

  {/* Fetching a value from input textfirld in
  a setage using usestate*/}
<Form.Group className="mb-3">
  <Form.Control onChange={e => setbody(e.target.value)}
        type="text"
        placeholder="Body" required/>
</Form.Group>

  {/* handing a onclick event in button for
  firing a function */}
<Button
onClick={e => handelSubmit(e)}
  variant="primary" type="submit">
  Submit
</Button>

{/* Redirecting back to home page */}
<Link className="d-grid gap-2" to='/'>
  <Button variant="info" size="lg">
  Home
  </Button>
</Link>

</Form>
  </div>
)
}

export default Create
