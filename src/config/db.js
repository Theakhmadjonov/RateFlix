import mongoose from "mongoose";
const url = process.env.DB_MONGOOSE;
const connectDb = async () => {
    try {
        await mongoose.connect(url);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}
export default connectDb;
