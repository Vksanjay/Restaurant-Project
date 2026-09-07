const mongoose=require("mongoose");

const data=async()=>{
    try {
        const conn=await mongoose.connect(process.env.Mongo_URI);
        console.log(`Mongodb connected : ${conn.connection.host} `)
    } catch (error) {
        console.error(`Error : ${error.message}`);
        process.exit(1);

    }
}

module.exports=data;

