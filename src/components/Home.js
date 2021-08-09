import React from 'react'
import {Container , Button , Row , Col } from 'react-bootstrap'
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';
export default function Home() {

return (
    <Container className="h-100">
        <Row className="h-100 align-items-center">
            {/* <Col className="col-12 text-center ">
                <h1>Hi ! <br/>am Ahmed yousif<br/>
               I code websites and design logos</h1>
            </Col> */}
  <Col className="col-12 text-center display-4">       
{/* <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString(`Hi, <br/>
    my name is Ahmed yousif <br/>
    I code websites and <br/> design logos !
    `).start();
  }}
  options={{
    delay:60
  }}
/> */}
<Fade bottom>
  <h1>
  Hi, <br/>
    my name is Ahmed yousif <br/>
    I code websites and <br/> design logos !
</h1>
</Fade>


</Col>   
        </Row>
    </Container>
    )
}
