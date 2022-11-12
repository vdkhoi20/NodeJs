const event_module=require("events");
var class_event= new event_module();

class_event.on("make noise",function(arg){
    console.log("catch event make noise "+arg.make_noise_nth);
});


class_event.emit("silent"); // nothing happen
class_event.emit("make noise",{make_noise_nth:"first time"});
class_event.emit("make noise",{make_noise_nth: "second time"});