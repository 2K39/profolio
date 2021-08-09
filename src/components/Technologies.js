import React from 'react'
import {Container , Button , Badge , Row , Col, Card } from 'react-bootstrap'
import bootstrap from '../media/bootstrap_plain_logo_icon_146619.png' 

export default function Technologies() {
    let Tech = ({name, photo}) => (
    //     <Row className="w-75">
    //     <div  class="d-flex justify-content-between align-items-center">
    //         <h2 className="d-block display-3 text-center">{name}</h2>
    //         <img className="img bg-light rounded" style={{height:'50%',width:'auto' }}  src={photo}/>
    //     </div>
    // </Row>
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
                Technologies
     
            </h2>   
        </Row>
        <br/><br/>
    <Row lg={3} sm={1} xs={1} className="display-4 justify-content-around" >
        
    <Tech name="React" style={{justifyContent: 'stretch'    }} photo="https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem-700x626.png"/>
    <Tech name="Bootstrap" photo={bootstrap}/>

        </Row>
      </Container>
    )
}
