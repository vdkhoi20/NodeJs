class MarryController{
    marrys(req,res) {
        res.render('marry');
    }
    age(req,res){
        res.send("<h1>hit age page</h1>");

    }
}
module.exports=new MarryController;