import { useEffect } from "react";
import { getalltodos } from "../redux/actions/index.js";
import { useDispatch} from "react-redux";
// import todos from "./todos.js";

const Todos = ()=>
{
    // const todo =useSelector(state => state.todo);
    const dispatch = useDispatch();

    
    useEffect(()=>
        {
            dispatch(getalltodos());
        },[] )
    return(
    <div>
        {/* <article>
            <ul>
                {
                todos.map(todo =>
                (
                    <todos/>
                )
                )}
            </ul>
        </article> */}
    </div>
    )
    
    
}

export default Todos;