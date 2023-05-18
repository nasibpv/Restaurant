import {React,useEffect,useState} from 'react'
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Restaurant() {
    // store to hold data froma api 
    var [restaurantList,setRestaurant]=useState([])

    // function to call api
    const fetchData=async()=>{
        const result=await fetch('/restaurants.json')
        result.json().then(data=>{
            setRestaurant(data.restaurants)
        }) 
    }
    // console.log(restaurantList);
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <Row>
      {
        restaurantList.map(item=>(
          
          <Col lg={4} md={6} className=' p-5'>
          <Restcard restData={item}/>
          </Col>
        
        ))
       
      }

    </Row>
  )
}

export default Restaurant