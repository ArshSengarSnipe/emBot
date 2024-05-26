import mongoose from "mongoose";

async function connectToDb(): Promise<void> {
  mongoose.connection.on("open", () => {
    console.log("Already connected to Database.");
    return;
  });
  mongoose.connection.on("reconnected", () => {
    console.log("Reconnected to Database!");
    return;
  });
  try {
    mongoose.connect(
      process.env.MONGOOSE_URL ??
        "mongodb+srv://arshsengarsnipe:ArshSengarSnipeEmBot@embotcluster0.qq7zuke.mongodb.net/emBotDB?retryWrites=true&w=majority&appName=emBotCluster0"
    );
    mongoose.connection.on("connecting", () => {
      console.log("Connecting to Database...");
    });
    mongoose.connection.on("connected", () => {
      console.log("Connected to Database!");
    });
    mongoose.connection.on("error", () => {
      console.log("Failed to connect to Database!");
    });
  } catch (error) {
    throw new Error("Please check Database connection URL.");
  }
}

export { connectToDb };
