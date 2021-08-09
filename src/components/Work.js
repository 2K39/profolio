import React from 'react'
import Fade from 'react-reveal/Fade';
import {Container , Button , Row , Col, Card , Carousel , img } from 'react-bootstrap'
import mesbah_logo from '../media/mesbah_logo.png'
import quran from '../media/quran.png' 



export default function Work() {

    function Card_({name, photo ,link , description}){

    return(
        <Fade left>
    <Col>
        <Card bg="transparent" className="m-3 border-0">

            <Card.Img src={photo}/>
            <Card.Body className="border">
                <Card.Title className="display-4">
                    {name}
                </Card.Title>

                <Card.Text as="h3" className="text-muted font-weight-light">
                    {description}
                </Card.Text>

                <Button variant="outline-dark" href={link}>
                    visit website
                </Button>

            </Card.Body>
        </Card>
    </Col>
    </Fade>
    )
}
    return (
    <Container id="work" style={{minHeight:'100vh',marginBottom:'200px'}}>
        <Row>
            <h2 className="display-1">
                My work <i class="bi bi-cursor text-dark"></i>
            </h2>     
        </Row>
        
        <Row lg={2} sm={1} xs={1}>  
            <Card_ name="Mesbah"
                photo={mesbah_logo}
                description="Tasbeeh counter"
                link="https://mesbah.netlify.app/"/>

            <Card_ name="Alquran-alkareem"
                photo={quran}
                description="A site for listing to quran"
                link="https://alquran-alkareem.netlify.app/"/>
        </Row>
    </Container> 
    )
}

// dom.map((x) =><Card photo={x.photo} name={x.name} link={x.link} description={x.description}/> )