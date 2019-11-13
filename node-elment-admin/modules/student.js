// 创建学生数据表
// mongodb数据库
// 1.引入mongoose模块
const mongoose = require("mongoose");
// 2.连接mongodb数据库
const mongodb = require("./mongodb");

let student = mongodb({
  name: {
    type: String,
    required: true
  },
  sex: String,
  age: Number,
  year: String,
  major: String,
  banji: String,
  market: String,
  pass: Number,
  nopass: Number
});
// 创建数据表
let stumodel = mongoose.model("student", student);
// 导出模块

// 添加数据到数据库
exports.addstu = (item, callback) => {
  stumodel.insertMany([item]).then(docs => {
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
exports.getallstu = callback => {
  stumodel.find().then(docs => {
    // console.log(docs);
    if (docs.length == 0) {
      result = {
        code: -1,
        msg: "没有找到学生数据"
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
exports.deletestu = (data, callback) => {
  stumodel.remove(data).then(result => {
    callback(result);
  });
};

// 修改
exports.editstu = (data, callback) => {
  stumodel.find(data).then(result => {
    callback(result);
    // console.log(result);
  });
};
exports.resetstu = (data, callback) => {
  stumodel.updateOne({ _id: data._id }, { $set: data }).then(result => {
    callback(result);
  });
};
// 查找数据
exports.findstu = (data, callback) => {
  stumodel.find(data).then(result => {
    console.log(result);
    callback(result);
  });
};
