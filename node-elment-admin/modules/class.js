// 创建班级数据表

// 引入mongoose模块
const mongoose = require("mongoose");
// 连接mongodb数据库
const mongodb = require("./mongodb");

// 创建表的数据
let classlist = mongodb({
  cname: {
    type: String,
    required: true
  },
  createdate: String,
  mainteacher: String,
  teacher: String
});

// 创建数据表
let classmodel = mongoose.model("classlist", classlist);

// 添加数据到数据库
exports.addclass = (item, callback) => {
  classmodel.insertMany([item]).then(docs => {
    console.log(docs);
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
exports.classhandle = callback => {
  classmodel.find().then(docs => {
    // console.log(docs);
    if (docs.length == 0) {
      result = {
        code: -1,
        msg: "没有找到数据"
      };
    } else {
      const formdata = [];
      for (let i = 0; i < docs.length; i++) {
        formdata.push(docs[i]._doc);
      }
      //   console.log(formdata);
      result = {
        code: 0,
        msg: "已找到",
        formdata
      };
    }
    callback(result);
  });
};
exports.deleclass = (data, callback) => {
  classmodel.remove(data).then(result => {
    callback(result);
  });
};
exports.editclass = (data, callback) => {
  classmodel.find(data).then(result => {
    callback(result);
    console.log(result);
  });
};

// 修改
exports.resetclass = (data, callback) => {
  classmodel.updateOne({ _id: data._id }, { $set: data }).then(result => {
    callback(result);
  });
};
exports.findclass = (data, callback) => {
  classmodel.find(data).then(result => {
    callback(result);
  });
};
