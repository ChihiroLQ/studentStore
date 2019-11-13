// 引入mongoose模块
const mongoose = require("mongoose");
// 连接到数据库
mongoose.connect("mongodb://127.0.0.1:27017/vue", {
  useNewUrlParser: !0,
  useUnifiedTopology: !0
});
// 向外暴露Schema构造函数
module.exports = option => {
  return mongoose.Schema(option);
};
