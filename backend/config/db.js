import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://janhvid05:8l3KytdqPiDwlCoa@cluster0.a8kaw9y.mongodb.net/Tomato"
    )
    .then(() => console.log("DB Connected"));
};
