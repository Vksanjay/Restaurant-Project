const mongoose=require("mongoose");

const data=async()=>{
    try {
        const conn=await mongoose.connect(process.env.Mongo_URI);
        console.log(`Mongodb connected : ${conn.connection.host} `);
        console.log(`Database: ${conn.connection.name}`);
    } catch (error) {
        console.error(`Error : ${error.message}`);
       throw error;

    }
}

module.exports=data;

