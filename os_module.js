const os_module=require('os');

var mem_total=os_module.totalmem();
var mem_free=os_module.freemem();

console.log(mem_total);
console.log(mem_free);