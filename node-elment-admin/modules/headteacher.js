// 创建班主任数据表

const mongoose = require("mongoose");
const mongodb = require("./mongodb");

let headteacher = mongodb({
  name: {
    type: String,
    required: true
  },
  sex: String,
  college: String,
  workdata: String
});
let headmodel = mongoose.model("headteacher", headteacher);

// 添加数据到数据库
exports.addheadteacher = (item, callback) => {
  headmodel.insertMany([item]).then(docs => {
    if (docs.length == 0) {
      result = {
        code: -1,
        msg: "添加失败"
      };
    } else {
      result = {
        code: 0,
        msg: "添加成功"
      };
    }
    callback(result);
  });
};

// 查找数据库中的数据
exports.getlist = callback => {
  headmodel.find().then(docs => {
    console.log(docs);
    if (docs.length == 0) {
      result = {
        code: -1,
        msg: "没有找到班主任数据"
      };
    } else {
      const data = [];
      for (let i = 0; i < docs.length; i++) {
        data.push(docs[i]._doc);
      }
      result = {
        code: 0,
        msg: "已找到",
        data
      };
    }
    callback(result);
  });
};

// 删除数据库中的数据
exports.deleteheadlist = (data, callback) => {
  headmodel.remove(data).then(result => {
    callback(result);
  });
};
exports.findlist = (data, callback) => {
  headmodel.find(data).then(result => {
    console.log(result);
    callback(result);
  });
};
