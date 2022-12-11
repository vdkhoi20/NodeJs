const express=require("express");
const router=express.Router();

const marrycontroller=require("../controllers/MarryController");
router.get('/',marrycontroller.marrys);
router.get('/age',marrycontroller.age);
module.exports=router;