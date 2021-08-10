import React from 'react'
import {Container , Button , Badge , Row , Col, Card } from 'react-bootstrap'
import bootstrap from '../media/bootstrap_.svg' 
import react from '../media/react-logo.svg'  
import Fade from 'react-reveal/Fade';
export default function Technologies() {
    let Tech = ({name, photo}) => (
    <Col className="">
        <Card className="mt-3 mb-3" className="border-0">
            <Row>
                <Col>
            <Card.Title style={{placeItems:'center'}} className="text-dark h-100 bolder d-grid text-center display-5">
               <h2>{name}</h2>   
            </Card.Title>
                 </Col>
                 <Col>
            <div>
                <Card.Img  style={{backgroundColor:'white'}} src={photo}/>
            </div>
            </Col>
            </Row>
        </Card>
    </Col>
    )
    return (
        <Container style={{Height:'100vh',marginBottom:'200px'}}  >
        <Row >
            <h2 className="display-2" >
                Technologies <i class="bi bi-file-earmark-code text-dark"></i>
            </h2>   
        </Row>
        <br/><br/>
    <Row xl={2} lg={2} className="display-4 justify-content-around" >

    <Fade left>
        <Tech name="React" photo={react}/>
    </Fade>

    <Fade right>
        <Tech name="Bootstrap" photo={bootstrap}/>
    </Fade>
        </Row>
      </Container>
    )
}
