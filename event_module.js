const event_module=require("events");
var class_event= new event_module();

class_event.on("make noise",function(){
    console.log("catch event make noise")
});


class_event.emit("silent"); // nothing happen
class_event.emit("make noise");
class_event.emit("make noise");