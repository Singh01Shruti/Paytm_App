const express = require("express");
const app = express();
const router = require("./routes/index")
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use("/api/vi", router);


app.listen(3000);
mongoose.connect("mongodb+srv://singh001shruti:eoYn0wHIr4puEx0z@cluster0.k9nfaff.mongodb.net/paytm");
