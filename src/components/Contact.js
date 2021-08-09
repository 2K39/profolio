import React from 'react'
import {Container ,Table, Button , Alert,Row , Col, Badge , ListGroup} from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
export default function Contact() {
    return (
  
<Container style={{minHeight:'90vh'}} >
<Row>
    <h2 className="display-1" >
        Contact <i class="bi bi-chat-text text-dark" />
    </h2>   
</Row>

<Row className="h-100"  style={{display:'grid',placeItems:'center'}}>
    <div style={{display:'grid',placeItems:'center'}}>

<Fade bottom>     
        <h2 class="display-3" style={{textAlign:'center'}}>
            If you want to have a similar looking website,
             I can make it for a symbolic amount
        </h2>  
        <br/><br/>
</Fade>
<Fade bottom>  
        <h2 className="text-justify">
            <i class="bi bi-telephone"/> +973 32216811 
        </h2> 

        <h2 className="text-justify">
            <i class="bi bi-envelope"/> ahmed.yousif.k@gmail.com   
        </h2>

    <Button variant="outline-success" className="m-3" href='https://wa.me/97332216811'>
        <i class="bi bi-whatsapp"/> Text me in whatsapp 
    </Button>

    </Fade>
    </div>
</Row>
<div>
<Fade bottom>
   <h3 className="text-center font-weight-light text-muted">
       <small>
          ©2021 by ahmed yousif khamdan 
       </small>
    </h3>
</Fade>  
</div>
</Container>

    )
}
