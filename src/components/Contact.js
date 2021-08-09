import React from 'react'
import {Container , Button , Alert,Row , Col, Badge , ListGroup} from 'react-bootstrap'

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

        
        <h2 class="display-6" style={{textAlign:'center'}}>If you want to have a similar looking website, I can make it for a symbolic amount </h2>  
        <br/>
        <h2 style={{textAlign:'center'}}><i class="bi bi-telephone"></i> 32216811 </h2>   
    <Button variant="outline-success" href='https://wa.me/97332216811'>
        <i class="bi bi-whatsapp"/> Text me in whatsapp 
    </Button>
    </div>
</Row>
</Container>

    )
}
