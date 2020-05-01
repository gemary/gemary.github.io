const express =require('express')
const db = require('../db')
const router = express.Router()

router.get('/',(req,res)=>{
        res.json("running")
})

router.get('/getAllPost',(req,res,next)=>{
    db.query(`SELECT * FROM posts ORDER BY date_created DESC`,(q_err,q_res)=>{
            res.json(q_res.rows)
    })
})

router.post('/createPost',(req,res,next)=>{
    
    const values = [
        req.body.title,
        req.body.des,  
        req.body.body,
        req.body.tag, 
        req.body.author]

      
        db.query(`INSERT INTO posts(title,decription ,body, tag, author, date_created)
            VALUES($1, $2, $3, $4,$5, NOW() )`,
            values, (q_err, q_res) => {
            if(q_err) return next(q_err);
            res.json(q_res.rows)
            })
})
router.put('/updateLike',(req,res)=>{
    
})
router.put('/updatePost',(req,res,next)=>{
    const values =[
        req.body.id,
        req.body.title,
        req.body.des,  
        req.body.body,
        req.body.tag, 
        req.body.author
    ]
    db.query(`UPDATE posts SET title =$2 ,decription =$3 ,body =$4 , tag =$5, author =$6 ,date_updated =NOW() WHERE pid = $1 `,values,
        (q_err,q_res)=>{
            if(q_err) return next(q_err);
            
            res.json(q_res.rowCount == 0?
                {status:"404",message:"fail",id:`${req.body.id}`}:
                {status:"200",message:"success",id:`${req.body.id}`})
        
        })
})


router.delete('/deletePost',(req,res,next)=>{
    const id = req.body.pid
    db.query(`DELETE FROM posts WHERE pid =$1`,[id],(q_err,q_res)=>{
        res.json(q_res.rows)
        console.log(q_err)
    })
})
module.exports = router