//MODULES
//encapsulated code, only share minimum
//commonJS every file is module by default.
const names=require("./names.js")
const sayHi = require("./utils.js")
const sayHI=require("./utils.js")
console.log(names)

const data=require("./6-alternative-flavour")
sayHI('susan')
sayHi(names.john)//we can use properties here.
sayHI(names.peter)
//console.log(data)
require('./7-mind-grenade.js')// ha a másik file-ban meghívjuk a függvényt és itt requiredoljuk ,akkor itt meghívódik és nemkell külön változóba menteni.