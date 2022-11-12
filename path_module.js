var path_module=require("path");
var path_parse=path_module.parse(__filename);
console.log(path_parse);
console.log(path_parse.dir);