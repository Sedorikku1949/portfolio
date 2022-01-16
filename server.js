const Express = require("express");
const app = Express();

app.use(Express.static("public"));

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname+"/Page.html");
})

app.listen(8000, () => console.log("Server is running on port 8000 at ip http://localhost:8000"));