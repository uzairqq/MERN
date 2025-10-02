let name = "Uzair";
console.log("Name:", name);

let age = 32;
console.log("Age:", age);

let isStudent = true;
console.log("Student:", isStudent);

//Let And Const
let city = "Karachi";
console.log("Let Before City:", city);

city = "Lahore";
console.log("Let After City:", city);

const country = "Pakistan";
console.log("Const Before Country:", country);

// country = "India";  //Here Will Come Error Constant Cant Assign Again
// console.log("Const After Country:", country);

//Undefined Vs Null

let phone;
console.log("Phone:", phone);

let email = null;
console.log("Email:", email);

//TypeOf
console.log("Type Of Name", typeof name);
console.log("Type Of Age", typeof age);
console.log("Type Of IsStudent", typeof isStudent);
console.log("Type Of Phone", typeof phone);
console.log("Type Of Email", typeof email);

//Hoisting
console.log(a); //Undefined
var a = 10;
console.log(a);

// console.log(b);
// let b = 20; //Here Error Will Come Uncomment for Watch
// console.log(b);

// console.log(c);
// var c = 30; // Here Will Come Uncomment for Watch
// console.log(b);

//Scope
x = 1;
y = 2;
z = 3;

function Test() {
  var x = 10;
  var y = 20;
  var z = 30;
  console.log(x, y, z);
}
console.log(x, y, z);
