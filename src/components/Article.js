import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Spinner, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Article({ match }) {

  const [newArticle, setNewArticle] = useState({});
  const [loading, setLoading] = useState(false);
 
  const fetchArticle = async () => {
    try {
      const res = await axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${match.params.id}`);
      const spaceFlightArt = res.data;
      const apiArt = spaceFlightArt;
      console.log(apiArt);
      setNewArticle(apiArt);
      setLoading(true);
    } catch (err) {
      alert(err.message);
    }
}

useEffect(() => {
  fetchArticle();
 
});

  return (
    <div className="mt-5 pt-5 mx-auto">
      <Container className="mt-3 pt-3">
      <Row>
      <Col sm={12} md={6} lg={4} className="mt-2 pt-2 mx-auto">
       {loading ? ( 
          <Card className="m-auto mt-5" style={{ width: '20rem' }}>
             <Card.Img variant="top" style={{ width: '20rem', height: '12rem'}} src={newArticle.imageUrl} alt={`Space news article${newArticle.title}image`}/>
       <Card.Body>
         <Card.Title>
         {`Name: ${newArticle.title}`}
         </Card.Title>
         <Card.Subtitle className='mb-2 text-muted'>
         {`News Site: ${newArticle.newsSite}`}
         </Card.Subtitle>
         <Card.Subtitle className='mb-2 text-muted'>
         {`Summary: ${newArticle.summary}`}
         </Card.Subtitle>
         <Link 
         to={{ pathname: `${newArticle.url}`}} target="_blank"
         className="btn btn-primary">
                 {newArticle.newsSite}
                
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

export default Article;