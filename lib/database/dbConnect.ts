import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Already Connected");
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URL || "");

        connection.isConnected = db.connections[0].readyState;

        console.log("DB Connected");
    } catch (error) {
        console.log("DB conn failed", error);

        process.exit(1);
    }
}

export default dbConnect;
