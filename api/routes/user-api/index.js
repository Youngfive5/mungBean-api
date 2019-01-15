var mymongo = require('mymongo1610');

// 获取账单
function getBill(req, res, next) {
    mymongo.find('billList', (err, result) => {
        if (err) {
            res.json({ code: 0, msg: err });
        } else {
            res.json({ code: 1, msg: '成功', data: result });
        }
    })
};

// 新增账单
function addBill(req, res, next) {
    var uid = req.body.uid,
        timer = req.body.timer,
        type = req.body.type,
        money = req.body.money,
        intro = req.body.intro,
        icon = req.body.icon;
    if (!uid || !timer || !type || !money || !intro || !icon) {
        res.json({ code: 3, msg: '参数丢失' });
    } else {
        mymongo.insert('billList', { uid: uid, timer: timer, type: type, money: money, intro: intro, icon: icon }, (err) => {
            if (err) {
                res.json({ code: 0, msg: err });
            } else {
                res.json({ code: 1, msg: '新增成功' })
            }
        })
    }
};

module.exports = {
    getBill: getBill,
    addBill: addBill,
}