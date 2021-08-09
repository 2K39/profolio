import React from 'react'
import {Container , Button , Row , Col } from 'react-bootstrap'
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';
export default function Home() {

return (
  <>
  <Container className="h-100">
    <Row className="h-100 align-items-center">
      <Col className="text-center display-4">       
          <Fade bottom>
            <h1>
                Hi ! <br/>
                I am Ahmed yousif <br/>
                I code websites and <br/>
                design logos 
            </h1>
          </Fade>
  
  <Fade top>
    <div style={{ position:'absolute',bottom:'10px', right:'50%' }}> 
    <div style={{position:"relative", right:'-50%'}}>
    <a href="#work"> 
    <i className="bi text-center  display-4 bi-chevron-compact-down text-dark"/>
    </a> 
          </div>
      </div>
  </Fade>

 
     
      </Col> 
      {/* <Fade>
    <div style={{ position:'absolute',right:'50%' }}> 
      <div style={{position:'relative',right:'-50%',top:'-100px' }} >
          <i className="bi text-center  display-4 bi-chevron-compact-down text-dark"/>
      </div>
    </div>
  </Fade> */}

  {/* <Fade>
    <div style={{ position:'absolute',bottom:'10px' }}> 
          <i className="bi text-center  display-4 bi-chevron-compact-down text-dark"/>
      </div>
  </Fade> */}



    </Row>  
  </Container>

  </>
  
    )
}
