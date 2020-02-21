Ecma script 5
Ecma script 6

function add(a,b){
    return a+b
}

add(1,2)


//es6
var add = (a,b) => {return a+b}


class Add{
    constructor(a,b){
        this.add = a+b
    }
}



var => we can redeclare and reassign
let => we cannot redeclare but can reassign
const=> we cannot redeclare nor reassign


var a =10
var a  => Declaring
a=10 => assigment