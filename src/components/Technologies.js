import React from 'react'
import {Container , Button , Badge , Row , Col, Card } from 'react-bootstrap'
import bootstrap from '../media/bootstrap.svg' 
import react from '../media/react-logo.svg'  
import Fade from 'react-reveal/Fade';
export default function Technologies() {
    let Tech = ({name, photo}) => (
    <Col>
        <Card className="mt-3 mb-3" className="border-0">
            <Card.Title className="text-dark bolder text-center display-5">
                {name}
            </Card.Title>
            <div>
                <Card.Img src={photo}/>
            </div>
        </Card>
    </Col>
    )
    return (
        <Container style={{Height:'100vh',marginBottom:'200px'}}  >
        <Row>
            <h2 className="display-1" >
                Technologies <i class="bi bi-file-earmark-code text-dark"></i>
            </h2>   
        </Row>
        <br/><br/>
    <Row lg={3} sm={1} xs={1} className="display-4 justify-content-around" >
    <Fade left>
        <Tech name="React" style={{justifyContent: 'stretch'    }} photo={react}/>
    </Fade>
    <Fade right>
    <Tech name="Bootstrap" photo={bootstrap}/>
    </Fade>
        </Row>
      </Container>
    )
}
