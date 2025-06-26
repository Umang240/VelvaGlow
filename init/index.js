const mongoose=require("mongoose");
const Product=require("../models/product.js");
const Cart = require("../models/cart.js");
const initdata=require("./data.js");
const initdata2=require("./cartdata.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/LumiSkin";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async() => {
    await Product.deleteMany({});
    await Product.insertMany(initdata.data);
    console.log("data is initialized");
}

const initDB2 = async () => {
   await Cart.deleteMany({});
   await Cart.insertMany(initdata2.cartdata);
   console.log("data is initialized 2");
}

initDB();
initDB2();
