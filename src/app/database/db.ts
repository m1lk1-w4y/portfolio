import mongoose from "mongoose";
// track the connection
let isConnected = false;
export const connect = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("DB connected already");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URL || "");
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};