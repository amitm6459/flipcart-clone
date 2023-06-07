 import mongoose from "mongoose";

export const Connection = async(username,password)=>{
    const URL =`mongodb://${username}:${password}@ac-ecx5bce-shard-00-00.vjuuuz1.mongodb.net:27017,ac-ecx5bce-shard-00-01.vjuuuz1.mongodb.net:27017,ac-ecx5bce-shard-00-02.vjuuuz1.mongodb.net:27017/?ssl=true&replicaSet=atlas-uko7ig-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
       await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
       console.log("database cennected sucseefully");
    } catch (error) {
        console.log('error while connecting with the dataBase ',error.message);
    }
}

export default Connection;