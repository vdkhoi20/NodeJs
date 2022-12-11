const express=require("express");
const router=express.Router();

const homecontroller=require("../controllers/HomeController");
router.get('/',homecontroller.home);
router.get('/age',homecontroller.age);
module.exports=router;