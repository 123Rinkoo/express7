const express= require('express');
const router=express.Router(); 
const path=require('path');
const rootdir=require('../utl/path');
const gettingproduct=require('../controller/product');

router.use('/add-product', gettingproduct.getproduct );


module.exports=router;
