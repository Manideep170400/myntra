import mongoose, { connection } from "mongoose";

const mongo_URL =
  "mongodb+srv://manideepreddy170400:Manideep100@cluster0.tvgnemc.mongodb.net/";

const dataBase = db.createCollection();
mongoose
  .connect(mongo_URL + dataBase)
  .then(() => {
    console.log("connected a mongoDB");
  })
  .catch(() => {
    console.error(error);
    console.log("not connected a mongoDB");
  });
