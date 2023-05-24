import axios from "axios";
import {SUCCESS, FAIL} from "../constants/restConstants"
// dispatch create
export const restList = () => async (dispatch) => {
    try{
        const {data} = await axios.get('/restaurants.json')
        //  console.log(data.restaurants); //tiload
         dispatch(
            {
                payload:data.restaurants,
                type:SUCCESS
            }
         )
}
catch(error){
    dispatch(
        {
            payload:error,
            type:FAIL
        }
    )
}
}