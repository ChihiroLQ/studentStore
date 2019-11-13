const express = require("express");
const service = require("./service");
const router = express.Router();

// 设置路由事件
// 获取数据库的数据
router
  .post("/addstudent", service.addstudenthandle)
  .post("/allstudent", service.allstudentHandle)
  .post("/addclass", service.addclassHandle)
  .post("/classlist", service.classlistHandle)
  .post("/addheadteacher", service.addheadHandle)
  .post("/headteacherlist", service.headteacherlistHandle)
  .post("/deleteheadlist", service.deleteHandle)
  .post("/deletestu", service.deletestuHandle)
  .post("/deleteclass", service.deleteclassHandle)
  .post("/editclass", service.editclassHandle)
  .post("/resetclass", service.resetclassHandle)
  .post("/editstu", service.editstuHandle)
  .post("/resetstu", service.resetstuHandle)
  .post("/findstu", service.findstuHandle)
  .post("/findclass", service.findclassHandle)
  .post("/findlist", service.findlistHandle);

module.exports = router;
