//this is for fetch data

import { addnew_todo ,getall_todo } from "./type.js";
import axios from "axios";

const app_url="https://localhost:8000"
export const addtodo =(data)=> async(dispatch)=>
{
    try {
        const res = await axios.post(`${app_url}/todos`,{data});

        dispatch({type: addnew_todo ,payload: res.data});

    } catch (error) {
        console.log(error.message);
    }
}

export const getalltodos =()=> async(dispatch)=>
{
    try {
        const res = await axios.get(`${app_url}/todos`);

        dispatch({type: getall_todo ,payload: res.data});

    } catch (error) {
        console.log("error in getting the api is = ",error.message);
    }
}