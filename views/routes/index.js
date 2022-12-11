const routerMarry=require('./marry');
const routerHome=require('./home');
function route(app){
        // console.log(routerMarry);
        //app.get('/home',(req,res)=>{ res.locals.pagetitle="love start";res.render("home"); });
        // app.get('/marry',(req,res)=>{ res.locals.pagetitle="love marry";res.render("marry"); });
        app.use('/home',routerHome);
        app.use('/marry',routerMarry);
        app.get('/',(req,res)=>{
        
            if (req.query.pn=="home") res.render("home");
            else if (req.query.pn=="marry") res.render("marry");
            else {
                if (req.query.pn){
                    res.locals.notfound="Page "+req.query.pn+" NOT Found";
                    console.log(req.query.pn);
                }
                    
                res.render("index");
            }
        }
        );
        app.post('/',(req,res)=>{
            if (req.body.pn){
                res.locals.notfound="Page "+req.body.pn+" NOT Found";
                console.log(req.body.pn);
            }
            res.render("index");
        }
        );
}
module.exports=route;