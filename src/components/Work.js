import React from 'react'
import {Container , Button , Row , Col, Card , Carousel , img } from 'react-bootstrap'
import mesbah_logo from '../media/mesbah_logo.png'
import quran from '../media/quran.png' 
export default function Work() {
let [dom, setDom] = React.useState(['a'])

React.useEffect(() => {
    fetch('/map')
  .then(response => response.json())
  .then(json => setDom(json) )
},[])


    function Card_({name, photo ,link , description}){

    return(
    <Col>
    <Card bg="light"   className="m-3">
       <Card.Img className="d-block  w-100" variant="top" src={photo}/>
       <Card.Body>
           <Card.Title className="display-4 text-dark font-weight-bold" >{name}</Card.Title>
           <Card.Text className="text-muted h3 font-weight-light">
               {description}
           </Card.Text>
           <Button variant="outline-dark" href={link}>visit website</Button>
       </Card.Body>
    </Card>
    </Col>
    )
}
    return (
    <Container style={{minHeight:'100vh',marginBottom:'200px'}}>
        <Row >
            <h2 className="display-1">
                my work: 
            </h2>     
        </Row>
        
        <Row lg={2} sm={1} xs={1}>
            <Card_ name="mesbah" photo={mesbah_logo} description="tasbeeh counter"  link="https://mesbah.netlify.app/"/>
            <Card_ name="alquran-alkareem" photo={quran} description="a site for listing to quran"  link="https://alquran-alkareem.netlify.app/"/>
        </Row>
    </Container> 
    )
}

// dom.map((x) =><Card photo={x.photo} name={x.name} link={x.link} description={x.description}/> )