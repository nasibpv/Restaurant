import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Restcard({restData}) {
  return (
    <>
     <Link to={`/view.restaurant/${restData.id}`} style={{textDecoration:"none",color:"black"}}>
          <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={restData.photograph} />
      <Card.Body>
        <Card.Title className='card-title'>{restData.name}</Card.Title>
        <Card.Text>
          
          <p><strong>Cuisine Type</strong>{restData.cuisine_type}</p>
          <p><strong>neighborhood : </strong>{restData.neighborhood}</p>
          {/* <p>{restData.address}</p> */}
          {/* <p>Monday : {restData.operating_hours.Monday}</p> */}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
     </Link >
  </>
  )
}

export default Restcard