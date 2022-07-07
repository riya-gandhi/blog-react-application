import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import blogPosts from '../blogPosts';
import { Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


function Edit() {

  // Here usestate has been used in order
  // to set and get values from the jsx
  const [author, setauthor] = useState('');
  const [body, setbody] = useState('');
  const[id,setid] = useState('');
  const[title,settitle] = useState('');
  
  // used for navigation with logic in javascript
  let history = useNavigate()
  
  // getting an index of an entry with an id
  var index = blogPosts.map(function(e) { return e.id; }).indexOf(id);

  // function for handling the edit and
  // pushing changes of editing/updating
  const handleSubmit = (e) =>{
    e.preventDefault(); // preventing from reload
    
    let a = blogPosts[index] // getting an index of an blogPosts

    // putting the value from the input textfield and
    // replacing it from existing for updation
    a.author = author
    a.body = body
    a.title = title

    // redirecting to main pbody
    history('/')
  }


  // Useeffect take care that pbody will be rendered only once
  useEffect(() => {
    setauthor(localStorage.getItem('author'))
    setbody(localStorage.getItem('body'))
    setid(localStorage.getItem('id'))
    settitle(localStorage.getItem('title'))
  }, [])
  
return (
  <div>
    <Form classauthor="d-grid gap-2" style={{margin:'15rem'}}>

      {/* setting a author from the input textfiled */}
      <Form.Group classauthor="mb-3">
        <Form.Control value={author}
              onChange={e => setauthor(e.target.value)}
              type="text" placeholder="Enter author" />
      </Form.Group>

      <Form.Group classauthor="mb-3">
        <Form.Control value={title}
              onChange={e => settitle(e.target.value)}
              type="text" placeholder="Enter Title" />
      </Form.Group>

      {/* setting a body from the input textfiled */}
      <Form.Group classauthor="mb-3">
        <Form.Control value={body}
              onChange={e => setbody(e.target.value)}
              type="text" placeholder="Enter Text" />
      </Form.Group>
      
      {/* Hadinling an onclick event running an edit logic */}
      <Button
      onClick={e => handleSubmit(e)}
      variant="primary" type="submit" size="lg">
        Update
      </Button>

      {/* Redirecting to main pbody after editing */}
      <Link classauthor="d-grid gap-2" to='/'>
      <Button variant="warning" size="lg">Home</Button>
      </Link>
    </Form>
  </div>
)
}
export default Edit
