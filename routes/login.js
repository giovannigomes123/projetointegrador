const express=require('express');
const router=express.router;

router.get('/', (req, res, next) =>{
  res.render('login', { message: null})
})

module.exports=router;