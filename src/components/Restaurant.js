import {React,useEffect,useState} from 'react'
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { restList } from '../actions/restaction';
// import action name
import { useDispatch,useSelector } from 'react-redux';

function Restaurant() {
    // store to hold data froma api 
    // var [restaurantList,setRestaurant]=useState([])
    // create hook for UseDispatch
    var dispatch=useDispatch()

    // function to call api
    // -----------------------
    // const fetchData=async()=>{
    //     const result=await fetch('/restaurants.json')
    //     result.json().then(data=>{
    //         setRestaurant(data.restaurants)
    //     }) 
    // }
    // console.log(restaurantList);

    // 
    useEffect(()=>{
        // fetchData()
        // (restList) is action name (first import action name)
      dispatch(restList())
    },[])

    const {restaurantList}=useSelector(state=>state.restaurantReducers)

  return (
    <Row>
      {
        restaurantList.map(item=>(
          
          <Col lg={4} md={6} sm={6} className=' p-5 '>
          <Restcard restData={item}/>
          </Col>
        
        ))
       
      }

    </Row>
  )
}

export default Restaurant