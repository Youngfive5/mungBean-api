var express = require('express');
var router = express.Router();
var userApi = require('./user-api/index');

/* GET users listing. */
// 获取列表
router.post('/api/getBill', userApi.getBill);

// 新增列表
router.post('/api/addBill', userApi.addBill);


module.exports = router;
