// create a store and stores the data of the front end 
//thunk is a middleware funtion that helps you to return functions 
//middleware is checks your requests


import {createStore, combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {todosreducer} from "./Reducer/todoreducer.js";

const reducers = combineReducers(
    {
        todos: todosreducer
    }
)
const middleware =[thunk];
const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;