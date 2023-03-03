import * as actiontype from "../actions/type.js";

export const todosreducer=(state=[], action)=>
{
    switch(action.type)
    {
        case actiontype.addnew_todo:
            return [action.payload, ...state];
        case actiontype.getall_todo:
            return action.payload;
        default:
            return state;
    }
}