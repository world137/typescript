// ประเภทของตัวแปร
var num = 1;
var firstname = "world";
var bool = true;
var a = 'helloworld';
var b;
var c;
var d;
var arr; //array
arr = ["1", "2", "3", "4"];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
function cal_discount(price, rate) {
    if (rate === void 0) { rate = 0.5; }
    var discount = price * rate;
    console.log('discount = ' + discount);
}
cal_discount(10, 0.05);
