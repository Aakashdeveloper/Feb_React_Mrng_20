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

var a = ["a","b","c"]
for(i=0;i<a.length;i++){
    console.log(a[i])
}

a.map((data) => { console.log(data)})

filter 

var a = [18, 45, 23,17 ,89]
a.filter((data) => { return data>18})