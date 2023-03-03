import express from "express";
import connection from "./database/db.js";
import cors from "cors";
import route from "./routes/route.js"
import bodyParser from "body-parser";

const app =express();

const port=8000;

app.use(cors());

app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));

app.use("/", route);  
connection();

app.listen(port , ()=>
{
   
    console.log(`the site is running at port ${port}`);
})
