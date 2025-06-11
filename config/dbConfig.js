import mongoose from "mongoose";

const mongodbConnect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/simiple-api");

    console.log("mongodbconnected");
  } catch (error) {
    console.log("MongoDb error: " + error);
    process.exit(1);
  }
};

export default mongodbConnect;
