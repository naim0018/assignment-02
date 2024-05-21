import app from "./app";
import config from '../src/app/config'
import mongoose from "mongoose";

async function main(){
    try {
        await mongoose.connect(config.db as string)
        app.listen((config.port),()=>{
            console.log(`App Running on ${config.port}`)
        })
    } catch (error) {
        console.log(error)
    }   
  
}
main()

