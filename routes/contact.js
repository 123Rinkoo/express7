const express=require('express');
const router=express.Router();
// const path=require('path');
// const rootdir=require('../utl/path'); 
const uscontacting=require('../controller/contact us');

router.use('/contactus',uscontacting.contacting)

module.exports=router;