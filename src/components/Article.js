import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Article({ match }) {

  const [newArticle, setNewArticle] = useState({});
  const [loading, setLoading] = useState(false);
 
  const fetchArticle = async () => {
    try {
      const res = await axios.get(`/v3/articles/${match.params.id}`);
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
 
}, []);

  return (
    <div className="mt-5 pt-5" >
      <Container className="mt-5 pt-5 col-lg-4 col-lg-offset-4">
       {loading ? ( 
          <Card className="my-1 p-1 rounded h-90 mt-5 pt-5 artCard" style={{ width: '30rem' }}>
       <Card.Body>
       <Card.Img variant="top" style={{ width: '20rem', height: '20rem'}} src={newArticle.imageUrl} alt={`Space news article${newArticle.title}image`}/>
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
    </Container>
    </div>
  );
}

export default Article;