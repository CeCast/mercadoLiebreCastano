const { prototype } = require("events");
const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(` servidor funcionando en el puerto ${PORT} `)
);

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./views/home.html"));
});

app.get("/registro", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/registro.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/login.html"));
});
