const express = require("express");
const app = express();
const port = 4000;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));

const dataTestProject1 = require("./models/myScema");

app.set("view engine", "ejs");
app.use(express.static("public"));

//
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
//

//عرض الصفحة المطلوبة عند الذهاب للمسار المطلوب
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/user/add.html", (req, res) => {
  res.render("/user/add.ejs");
});
app.get("/user/view.html", (req, res) => {
  res.render("/user/view.ejs");
});
app.get("/user/edit.html", (req, res) => {
  res.render("/user/edit.ejs");
});

mongoose
  .connect(
    "mongodb+srv://basil:_%23X8p%21_4U%23dmMN8@cluster0.8gkpu.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
