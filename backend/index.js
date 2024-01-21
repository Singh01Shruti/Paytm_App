const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use("/api/vi", router);
app.listen(3000);
module.exports = router;