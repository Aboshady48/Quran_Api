const express = require("express");
const app = express();
const dbConnect = require("./config/dbConnect");
const port = 5000;

//data base connection
dbConnect();

// Middleware
app.use(express.json());

//inmport Routes
const routes = require("./routes/index");
app.use(routes);

app.listen(port, (req, res) => {
  console.log(`Server Is Running At Url : http://localhost:${port}`);
});
