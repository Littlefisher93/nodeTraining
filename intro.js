const amount =12

if(amount <10)
console.log("small number")
else{
 console.log("large number")
}
console.log("hey its my first  node app.")
console.log(__dirname)//path to current directory
setInterval(() => {
 console.log("hello world")
}, 1000);
/*other globals
__dirname
__filename-file name
require-function to use modules (common js)
module- info aobut current module(file)
process-info about env where the program is being executed
*/
