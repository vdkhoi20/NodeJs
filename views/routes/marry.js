const expres=require("express");
const router=expres.Router();

const marrycontroller=require("../controllers/MarryController");
router.use('/home',marrycontroller.marrys);

module.exports=router;