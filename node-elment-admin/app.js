const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
// 引入路由文件
const router = require("./modules/router");
app.use(cors());
app.use(bodyParser.json());
app.use(router);

app.listen(8888, () => {
  console.log("http://localhost:8888");
});
