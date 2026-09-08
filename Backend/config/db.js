const mongoose = require("mongoose");

let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null
    };
}

const connectDB = async () => {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.Mongo_URI, {
            serverSelectionTimeoutMS: 10000
        });
    }
    cached.conn = await cached.promise;

    console.log(`MongoDB connected: ${cached.conn.connection.host}`);
    console.log(`Database: ${cached.conn.connection.name}`);
    return cached.conn;
};

module.exports = connectDB;

