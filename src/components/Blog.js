import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Spinner, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Blog({ match }) {

  const [newBlog, setNewBlog] = useState({});
  const [loading, setLoading] = useState(false);
 
  const fetchBlog = async () => {
    try {
      const res = await axios.get(`https://api.spaceflightnewsapi.net/v3/blogs/${match.params.id}`);
      const spaceFlightBlog = res.data;
      const apiArt = spaceFlightBlog;
      console.log(apiArt);
      setNewBlog(apiArt);
      setLoading(true);
    } catch (err) {
      alert(err.message);
    }
}

useEffect(() => {
  fetchBlog();
 
});

  return (
    <div className="mt-5 pt-5 mx-auto">
      <Container className="mt-3 pt-3">
      <Row>
      <Col sm={12} md={6} lg={4} className="mt-2 pt-2 mx-auto">
       {loading ? ( 
          <Card className="m-auto mt-5" style={{ width: '20rem' }}>
             <Card.Img variant="top" style={{ width: '20rem', height: '12rem'}} src={newBlog.imageUrl} alt={`Space news blog${newBlog.title}image`}/>
       <Card.Body>
         <Card.Title>
         {`Name: ${newBlog.title}`}
         </Card.Title>
         <Card.Subtitle className='mb-2 text-muted'>
         {`Blog Sites: ${newBlog.newsSite}`}
         </Card.Subtitle>
         <Card.Subtitle className='mb-2 text-muted'>
         {`Summary: ${newBlog.summary}`}
         </Card.Subtitle>
         <Link 
         to={{ pathname: `${newBlog.url}`}} target="_blank"
         className="btn btn-primary">
                 {newBlog.newsSite}
                
          </Link>
      </Card.Body>   
    </Card>
   
       ) : <Spinner animation="border" variant="danger" style={{ position: "fixed", top: "50%", left: "50%"}} />} 
   
    </Col>
  </Row>
  </Container>
    </div>
  );
}

export default Blog;
