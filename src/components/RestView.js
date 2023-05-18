import  { React, useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Review from './Review';
import OperatingTime from './OperatingTime';

function RestView() {
  const params=useParams()
  // console.log(params.d);
  // 
  var [restData,setData]=useState([])
  // 
  const data=async()=>{
   const result=await fetch('/restaurants.json')
   result.json().then(data=>{
    setData(data.restaurants)
   })
  }
  // console.log(restData);
const restaurants=restData.find(item=>item.id==params.id)
console.log(restaurants);
  useEffect(()=>{
    data()
  },[])
  return (
 <>
 {
  restaurants?(
      <Row className='p-3 ps-5'style={{height:"670px"}}>
          <Col  lg={4} md={4} className=' p-0 '>
          <img src={restaurants.photograph} style={{width:"100%",height:"300px"}}></img>
          </Col>
          <Col lg={6} md={8} className=' p-2'>
            <h1>{restaurants.name}</h1>
            <p><strong>neighborhood : </strong>{restaurants.neighborhood}</p>
            <p><strong>address : </strong>{restaurants.address}</p>
            <p><strong>cuisine_type : </strong>{restaurants.cuisine_type}</p>
            
            <div className="p-2 me-2"><OperatingTime TimeData={restaurants.operating_hours}></OperatingTime></div >
            <div className="p-2 me-2"><Review reviewData={restaurants.reviews}></Review></div>
          </Col>
      </Row>):""
  }
 </>
  )
}

export default RestView