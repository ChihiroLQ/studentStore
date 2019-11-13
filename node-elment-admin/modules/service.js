// 引入学生列表
const student = require("./student");
// 引入班级列表
const classlist = require("./class");
// 引入班主任列表
const headteacher = require("./headteacher");

// 添加学生
exports.addstudenthandle = (req, res) => {
  const body = req.body;
  student.addstu(body, result => {
    if (result.code == 0) {
      res.json({
        msg: result.msg
      });
    }
  });
};

// 添加班级
exports.addclassHandle = (req, res) => {
  const body = req.body;
  classlist.addclass(body, result => {
    if (result.code == 0) {
      res.json({
        msg: result.msg
      });
    }
  });
};
exports.addheadHandle = (req, res) => {
  const body = req.body;
  headteacher.addheadteacher(body, result => {
    if (result.code == 0) {
      res.json({
        msg: result.msg
      });
    }
  });
};

// 渲染数据库数据到allstudent页面
exports.allstudentHandle = (req, res) => {
  student.getallstu(result => {
    const { code, data, msg } = result;
    if (code == 0) {
      res.json({
        data,
        msg
      });
    }
  });
};
exports.classlistHandle = (req, res) => {
  classlist.classhandle(result => {
    const { code, formdata, msg } = result;
    if (code == 0) {
      res.json({
        data: formdata,
        msg
      });
    }
  });
};
exports.headteacherlistHandle = (req, res) => {
  headteacher.getlist(result => {
    const { code, data, msg } = result;
    if (code == 0) {
      res.json({
        data,
        msg
      });
    }
  });
};

// 删除数据库里的数据
exports.deleteHandle = (req, res) => {
  headteacher.deleteheadlist(req.body, result => {
    console.log(result);
  });
};
exports.deletestuHandle = (req, res) => {
  student.deletestu(req.body, result => {
    console.log(result);
  });
};
exports.deleteclassHandle = (req, res) => {
  classlist.deleclass(req.body, result => {
    console.log(result);
  });
};

// 编辑数据库的数据
exports.editclassHandle = (req, res) => {
  classlist.editclass(req.body, result => {
    res.send(result);
  });
};
// 修改
exports.resetclassHandle = (req, res) => {
  classlist.resetclass(req.body, result => {
    res.send(result);
  });
};
exports.editstuHandle = (req, res) => {
  student.editstu(req.body, result => {
    res.send(result);
  });
};
exports.resetstuHandle = (req, res) => {
  student.resetstu(req.body, result => {
    res.send(result);
  });
};
// 查询数据表数据
exports.findstuHandle = (req, res) => {
  student.findstu(req.body, result => {
    res.send(result);
  });
};
exports.findclassHandle = (req, res) => {
  classlist.findclass(req.body, result => {
    res.send(result);
  });
};
exports.findlistHandle = (req, res) => {
  headteacher.findlist(req.body, result => {
    res.send(result);
  });
};
