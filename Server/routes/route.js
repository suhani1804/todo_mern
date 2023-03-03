import express  from "express";
import {getalltodos} from "../../client/src/redux/actions/index.js";
import { addtodo } from "../controller/todo_controller.js";


const route= express.Router();

route.post("/todos",addtodo);
route.get("/todos",getalltodos);

export default route;