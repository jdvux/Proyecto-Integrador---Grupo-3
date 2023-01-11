const express = require("express");
const path = require("path");

const app = express();

const publicFolderPath = path.resolve(__dirname, "./public")
app.use(express.static(publicFolderPath));

app.get("/", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/productDetail.html"))
});

app.listen(3000, () => console.log("Levantando un servidor web con Express"));