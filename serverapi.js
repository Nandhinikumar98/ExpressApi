//console.log("Hello");

const express = require("express");
const app = express();
const port = 3000;

//use -- for middleware
app.use(express.json());
app.use("/api/contacts", require("./routes/contactroutes"));

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
