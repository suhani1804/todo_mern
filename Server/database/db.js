import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const user = process.env.db_username;
const password= process.env.db_password;

const connection =()=>
{
    
    const mongo_url=`mongodb+srv://${user}:${password}@cluster0.ezoj6kw.mongodb.net/?retryWrites=true&w=majority`;
    mongoose.connect(mongo_url, {useNewUrlParser: true});
    mongoose.connection.on("connected", ()=>
    {
        console.log("Database is connected");
    })
    mongoose.connection.on("disconnected", ()=>
    {
        console.log("Database is disconnected");
    });
    mongoose.connection.on("error", ()=>
    {
        console.log("Database has some error", error.message);
    })
}

export default connection;