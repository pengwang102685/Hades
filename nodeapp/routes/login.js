var express = require('express');
var mysql = require('./sql');
var router = express.Router();

// 修改资料
router.post('/upData', (req, res) => {
    var json = req.data;
    // 更改数据
    // console.log(mysql);
    mysql.sql({
        sql: `update four_login set name=?, pass=?, imgurl=?, email=? where user=?`,
        arr: [json.name, json.pass, json.imgurl, json.email, json.user],
        data(data) {
            // console.log(data);
            // 获取数据
            mysql.sql({
                sql: `select * from four_login where user=${json.user}`,
                data(data) {
                    res.send({
                        ok: 0,
                        data: data
                    });
                }
            })
        }
    })

});

// 注册
router.post('/up', function (req, res) {
    var json = req.data;
    // console.log(json);
    // 添加帐号及资料
    mysql.sql({
        sql: 'insert into four_login (name,pass,imgurl,tel,email) values(?,?,?,?,?)',
        arr: [json.name, json.pass, json.imgurl, json.tel, json.email],
        data(data) {
            // 获取资料
            mysql.sql({
                sql: `select * from four_login where user=${data.insertId}`,
                data(data) {
                    res.send({
                        ok: 0,
                        data: data
                    });
                }
            })
        }
    })
});


// 获取登录头像
router.get('/showImg', function (req, res) {
    var json = req.data;
 
    mysql.sql({
        sql: `select imgurl from four_login where user=${json.user}`,
        data(data) {
            // console.log(data);
            if (data.length) {
                res.send({
                    ok: 0,
                    data: data
                });
            } else {
                res.send({
                    ok: 1,
                    data: ''
                });
            }
        }
    });
});

// 登录
router.post('/in', function (req, res) {
    var json = req.data;
    // 判断登陆
    mysql.sql({
        sql: `select * from four_login where user=${json.user} and pass=${json.pass}`,
        data(data) {
            // console.log(data);
            if (data.length) {
                res.send({
                    ok: 0,
                    data: data
                });
            } else {
                res.send({
                    ok: 1,
                    data: ''
                });
            }
        }
    });
});

module.exports = router;