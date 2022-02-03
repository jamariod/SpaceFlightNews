import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Spinner } from 'react-bootstrap';


function Article({ match }) {

  const [newArticle, setNewArticle] = useState({});
  const [loading, setLoading] = useState(false);
 
  const fetchArticle = async () => {
    try {
      const res = await axios.get(`/v3/articles?_limit=200/${match.params.id}`);
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
  console.log(match);
}, []);

  return (
    <div>
      <Container className="mt-5 pt-5">
       {loading ? ( 
          <Card className="my-3 p-3 rounded h-90 mt-5 pt-5">
       <Card.Body>
       <Card.Img variant="top" src={newArticle.imageUrl} alt={`Giant Bomb API Character ${newArticle.title}image`}/>
         <Card.Title>
         {`Name: ${newArticle.title}`}
         </Card.Title>
         <Card.Subtitle className='mb-2 text-muted'>
         {`News Site: ${newArticle.newsSite}`}
         </Card.Subtitle>
         <Card.Subtitle className='mb-2 text-muted'>
         {`Summary: ${newArticle.summary}`}
         </Card.Subtitle>
        
      </Card.Body>   
    </Card>
       ) : <Spinner animation="border" />} 

    
    </Container>
    </div>
  );
}

export default Article;