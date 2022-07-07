import React from 'react'
import { Button,Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import blogPosts from '../blogPosts';
import { Link, useNavigate } from 'react-router-dom';

function Home() {

let history = useNavigate()

// You may skip this part if you're
// using react-context api or redux
function setID(id,author,body,title){
  localStorage.setItem('id', id);
  localStorage.setItem('author', author);
  localStorage.setItem('body', body);
  localStorage.setItem('title', title);
}

// Deleted function - functionality
// for deleting the entry
function deleted(id){
  
  var index = blogPosts.map(function(e) { return e.id; }).indexOf(id);

  // deleting the entry with index
  blogPosts.splice(index,1)

  // We need to re-render the pbody for getting
  // the results so redirect to same pbody.
  history('/')
}

return (
  <div style={{margin:'10rem'}}>
    <Table striped bordered hover size="sm">
<thead>
  <tr>
  <th>author</th>
  <th>body</th>
  </tr>
</thead>
<tbody>

  {/* Mapping though every element in the blogPosts
  and showing the data in the form of table */}
  {blogPosts.map((item) => {
return(
<tr>
  <td>{item.author}</td>
  <td>{item.title}</td>
  <td>{item.body}</td>
    
  {/* getting theid,author, and body for storing these
    value in the jsx with onclick event */}
  <td><Link to={`/edit`}><Button onClick={(e) =>
  setID(item.id,item.author,item.body,item.title)} variant="info">
    Update</Button></Link></td>

  {/* Using thr deleted function passing
  the id of an entry */}
  <td><Button onClick={e => deleted(item.id)}
  variant="danger">Delete</Button></td>
  </tr>
)})}
</tbody>
</Table>

{/* Button for redirecting to create pbody for
insertion of values */}
<Link classauthor="d-grid gap-2" to='/create'>
<Button variant="warning" size="lg">Create</Button>
</Link>
  </div>
)
}

export default Home
