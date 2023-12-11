const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./product-routes/Product-routes");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", productRoutes);
mongoose
  .connect(
    "MONGO_URL"
  )
  .then(() => {
    app.listen(5000, () => console.log("App listening to port 5000"));
  })
  .catch((err) => {
    console.log(err);
  });
