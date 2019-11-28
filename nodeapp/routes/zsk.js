var express=require('express')
var mysql=require('./sql')
var router=express.Router()


router.get('/zsk1',(req,res)=>{
    var json=req.data
    mysql.sql({
        sql:`select shuju1 from four_zsk `,
        data(data){
            if(data.length){
                res.send({
                    ok:0,
                    data:data
                })
            }else{
                res.send({
                    ok:1,
                    data:''
                })
            }
        }
    })
})

module.exports = router;