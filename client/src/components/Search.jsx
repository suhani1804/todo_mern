import { useState } from "react";
import {addtodo} from "../redux/actions/index.js";
import { useDispatch } from "react-redux";

const Search= ()=>
{
    const[text,settext]=useState("");

    const dispatch= useDispatch();

    const onformsubmit= (e)=>
    {
        e.preventdefault();
        dispatch(addtodo(text));

        settext("");
    }
    const onInputchange=(e)=>
    {
       settext(e.target.value);
    }

    return(
        
            <form >
                <input placeholder="Enter your todo"
                className="input"
                onChange={onInputchange}
                onSubmit={onformsubmit} 
                value={text}
                />
            </form>
        
    )
}

export default Search;