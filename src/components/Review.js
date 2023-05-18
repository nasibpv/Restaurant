import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Review({reviewData}) {
    const [open, setOpen] = useState(false);

  return (
    <>
    <Button
      onClick={() => setOpen(!open)}
      aria-controls="example-collapse-text"
      aria-expanded={open}
    >
      Reviews
    </Button>
    <div style={{ minHeight: '150px',marginTop:"10px" }}>
      <Collapse in={open} dimension="width">
        <div id="example-collapse-text">

         {
            reviewData.map(item=>(
          <Card body style={{ width: '400px' }}>
            <p>Name : {item.name}</p>
            <p>rating : {item.rating}</p>
            <p>date : {item.date}</p>
            <p>comments : {item.comments}</p>

          </Card>
          ))
          }
        </div>
      </Collapse>
    </div>
  </>
  )
}

export default Review