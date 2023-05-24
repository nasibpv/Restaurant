import {createStore,combineReducers,applyMiddleware} from "redux"
// combineReducers = one or more reducers using time .all reducers compaine method
import thunk from "redux-thunk"
// thunk  using middleware there for redux is sychronous 
import { restreducer } from "../reducers/restreducer"

// reducers
const reducers=combineReducers({
    restaurantReducers:restreducer
})

// middleware
const middleware=[thunk]

// create store
const store=createStore(reducers,applyMiddleware(...middleware))


export default store