// ประเภทของตัวแปร
let num : number = 1
let firstname : string = "world"
let bool : boolean = true
let a : any = 'helloworld'
let b : void
let c : null
let d : undefined

var arr : string[]; //array
arr = [ "1", "2" , "3" , "4" ]
for(var i = 0 ; i < arr.length ; i++){
    console.log(arr[i])
}

function cal_discount(price : number , rate : number = 0.5){ //default parameter
    var discount = price * rate
    console.log('discount = ' + discount)
}
cal_discount(10,0.05)