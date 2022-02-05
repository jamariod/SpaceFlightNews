import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { MDBCol,  MDBContainer } from "mdbreact";
import { Card, Col, Row, Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Articles() {

  const [search, setSearch] = useState('');
  const [arts, setArts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  //  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    axios.get('/v3/articles?_limit=200')
    .then((response)=>{
      setArts(response.data)
    })
  }, [])

  useEffect(()=>{
    setFilteredData(
      arts.filter((art)=> art.newsSite.toLowerCase().includes(search.toLowerCase()))
    )
  }, [search, arts])

  const scrollContainerStyle = { maxWidth: "1500px", maxHeight: "800px" };
  return (
    
    <div>
      <Container className="mt-5 pt-5">
      <MDBCol md="6" className="mt-5 pt-5 mx-auto">
      <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={(e)=>{
        setSearch(e.target.value);
      }}/>
    </MDBCol>
    </Container>
    {filteredData.length === 0 ? <h1 className="mt-5 pt-5 resultsText">No results found</h1>  : 


    <MDBContainer>
     
      <div className="scrollbar  mt-5 mx-auto" style={scrollContainerStyle}>
    
      <Fragment>
      
      <Container className="mt-5 pt-5">
     <Row>
      {filteredData.map((val) => (
       <Col sm={12} md={6} lg={4} key={val.id} className="myKey">
         <>
        <Card className="mt-5" style={{ width: '18rem'}}>
            <Card.Img variant="top" style={{ width: '18rem', height: '12rem'}} src={val.imageUrl} alt={`Space Flight New Article ${val.title}image`}/>
            <Card.Body>
              <Card.Title className="text">{`${val.title}`}</Card.Title>
              <Link to={`/articles/${val.id}`} className="btn btn-primary">
              {val.newsSite}
              </Link>
            </Card.Body>
          </Card>
        </>
      </Col>
    ))}
      
    </Row>
   
    </Container>
    
    </Fragment>
   
    </div>
    
    </MDBContainer> 
  }
  )
  </div>
  );
}

export default Articles;
