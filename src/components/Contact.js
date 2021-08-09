import React from 'react'
import {Container ,Table, Button , Alert,Row , Col, Badge , ListGroup} from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
export default function Contact() {
    return (
  
<Container style={{minHeight:'90vh'}} >
<Row>
    <h2 className="display-1" >
        Contact
        <Badge >
            <i class="bi bi-chat-text-fill" />
        </Badge>
        </h2>   
</Row>

<Row className="h-100"  style={{display:'grid',placeItems:'center'}}>
    <div style={{display:'grid',placeItems:'center'}}>

<Fade bottom>     
        <h2 class="display-6" style={{textAlign:'center'}}>If you want to have a similar looking website, I can make it for a symbolic amount </h2>  
        <br/><br/>
</Fade>
<Fade bottom>  
        <h2 style={{textAlign:'center'}}><i class="bi bi-telephone"></i> +973 32216811 </h2> 
        <h2 style={{textAlign:'center'}}><i class="bi bi-envelope"></i> ahmed.yousif.k@gmail.com</h2>
    <Button variant="outline-dark" className="m-3" href='https://wa.me/97332216811'>
        <i class="bi bi-whatsapp"/> Text me in whatsapp 
    </Button>
    </Fade>
    </div>
</Row>


</Container>

    )
}
