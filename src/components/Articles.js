import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Col, Row, Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Articles() {

  const [arts, setArts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchArticles = async () => {
    try {
      const res = await axios.get('/v3/articles?_limit=200');
      console.log(res);
      const spaceFlightArts = res.data;
      console.log(spaceFlightArts);
      const apiArts = spaceFlightArts;
      console.log(apiArts);
      setArts(apiArts);
      setLoading(true);

    } catch (err) {
      alert(err.message);
    }
  }

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Fragment>
      <Container className="mt-5 pt-5">
      {loading ? (
          <Row>
          {arts.map(art => (
            <Col sm={12} md={6} lg={4} key={art.id}>
              <>
             <Card className="mt-5" style={{ width: '18rem'}}>
            
               <Card.Img variant="top" style={{ width: '18rem', height: '18rem'}} src={art.imageUrl} alt={`Space Flight New Article ${art.title}image`}/>
               <Card.Body>
                 <Card.Title>{`Title: ${art.title}`}</Card.Title>
                 <Link to={`/articles/${art.id}`} className="btn btn-primary">
                 {art.newsSite}
                 {/* <Button variant="primary">
                   
                   </Button> */}
                   </Link>
               </Card.Body>
             </Card>
           </>
         </Col>
          ))}
          </Row>
      ) : <Spinner animation="border" />}
     </Container>
    </Fragment>
  );
}

export default Articles;
