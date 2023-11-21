const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("servidor corriendo en el puerto ${port}"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./views/home.html"));
});

app.get("/registro", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/registro.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/login.html"));
});
