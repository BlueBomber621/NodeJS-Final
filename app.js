const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app
  .use(cors())
  .use(express.json())
  .use((req, res, next) => {
    res.setHeader("Access-Allow-Control-Origin", "*");
    next();
  })
  .use("/", require("./routes/objects.js"));

app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});
