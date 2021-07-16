//window.alert("Hello from js file");

//document.write("<h2> Hello <span> page</span> </h2>");

//console.log("hello from js file");

//console.error("erros");
//console.table(["benoo" , "kero" , "remo"]);

//console.log("%c hello from %c js file " , "color:red ; font-size: 40px" , "color:blue ; font-size: 40px")

/*console.log("benoo khalaf");
console.log(typeof "benoo khalaf");
console.log(typeof 1 );
console.log(typeof 1.48784545 );
console.log(typeof [10 , 17 , 20]);
console.log(typeof ["ab" , "ke" , "mi"]);
console.log(typeof {name:'benoo' , age : 26 , country :'egy'});
console.log(typeof false);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null)

 var myName = "Benoo";
var myAge = 26;
var myMe = myName + myAge;

console.log(`${myMe}
    ####################
    my name is ${myName}
    myAge is ${myAge}
`);

var num1 = 20;
var numb2 = 30;

console.log(20+30);
console.log(30-20);
console.log(30*20);
console.log(20/30);
console.log(37%7);
console.log(20+30 + 30-20 + 30*20 + 20/30 + 37%7);

console.log("el web \n zero \n school ");

let firstName = "abanoub";
let lastName = "khalaf";

let myName = `
<div>
 <h2>
 ${firstName}

 </h2>
 <p>
${lastName}
 </p>

</div>
`
document.write(myName);

let numberOne = 10;
let numberTwo = 20;

console.log("10" + "20");
console.log(`${numberOne}${numberTwo}`);
console.log(numberOne + "\n" + numberTwo);
console.log(`${numberOne}
${numberTwo}`);


console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object


var myIN = "I'm In \n" +"\\\\ \n" +"Love \\\\ \"\"\" \`\`\` \n"+ "\+\+" + "with" + "\+\+ \n"+"\\\"\"\"\\\"\"\" \n"+"\"\"JavaScript\"\"\`\`"

console.log(myIN);


let a = 21;
let b = 20;
let c = `${b}${a}`;

console.log(`\/\/ _${a}_` + `${c}_`.repeat(3) + `${b}_`);


let a = 10;
let b = 20;
a += 10;
console.log(+a + true);



console.log(10 + 20 + 15 + 3 + 190 + 100 + true*62 + - 400 );


console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);


console.log((26).toString());
console.log(100.666666.toFixed(2));
console.log(parseInt("100.500 benoo"));
console.log(parseFloat("100.500 benoo"));

console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.5));
console.log(Number.isInteger(100));


console.log(Number.isNaN("benoo" / 50));
console.log(Number.isNaN(100.5));
console.log(Number.isNaN(100));

var age = "26.578959";

console.log(parseFloat(age).toFixed(3));
console.log(Number.isInteger(age));
console.log(Number.isNaN(age / "bbenoo"));


console.log(Math.round(99.5));
console.log(Math.ceil(99.2));
console.log(Math.floor(99.9));

console.log(Math.min(1,50,80,90,2,3,4));
console.log(Math.max(1,50,80,90,2,3,4));

console.log(Math.pow(2 , 4));
console.log(Math.random());

console.log(Math.trunc(99.5));
console.log(5000+5000);
console.log(parseInt(10000));
console.log(parseFloat(10000.0));
console.log(Math.ceil(9999.9));
console.log(Math.round(10000.3));
console.log(Math.trunc(10000.5987));
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000
console.log(+"100000");
console.log(-"-100000");
console.log(Math.pow(10,5));

console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.MAX_SAFE_INTEGER - Number.MAX_SAFE_INTEGER +16);

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Number.isInteger(parseFloat(myVar).toFixed(2))); // 100.57

let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

let flt = 10.4;

console.log(Math.round(flt));
console.log(Math.trunc(flt));
console.log(parseInt(flt));
console.log(parseInt(flt.toFixed(0)));


console.log(Math.floor(Math.random() * (4 - 3 + 1)) + 3);

console.log(Math.floor(Math.random() * 5 ) );

let theName = "  Abanoub  ";
console.log(theName[1]);
console.log(theName.charAt(1));
console.log(theName.length);
console.log(theName.trim());
console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

console.log(theName.trim().charAt(2).toUpperCase());


let a = "abanoub hvbhokhalafouoll";

console.log(a.indexOf("o", 5));
console.log(a.lastIndexOf("o" ,15));

console.log(a.slice(0 , 7));
console.log(a.slice(-16 , -3));
console.log(a.repeat(4));
console.log(a.split("" , 6));

console.log(a.length);
console.log(a.substring(a.length - 7 , a.length - 4 ));

console.log(a.substr(-5 , 5));

console.log(a.includes("abanoub"));
console.log(a.startsWith("a" , 50));

console.log(a.endsWith("o" , 5));




let myName = "ello";

console.log(myName[0].toLowerCase());
console.log(myName.charAt(0).toLowerCase());
console.log(myName.slice(0,1).toLowerCase());
console.log(myName.substring(0,1).toLowerCase());
console.log(myName.substr(0,1).toLowerCase().repeat(3));



let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes("z")); // True
console.log(word.startsWith("E")); // True
console.log(word.endsWith("o")); // True


let a = "Elzero Web School";

console.log(a.charAt(2).toUpperCase() + a.slice(3,6));
console.log(a.substring(13,14).toUpperCase().repeat(8));
console.log(a.split(" ",1));
console.log(a.substr(0,6) +` `+ a.substr(11,7));



console.log(a[0].toLowerCase() + a.slice(1 , a.length-1).toUpperCase() + a[a.length-1].toLowerCase());



console.log(10 == "10");
console.log(10 != "10");

console.log(10 === "10");
console.log(10 !== "10");
console.log(10 !== 10);

console.log(1>=1);

console.log("benoo" === "abanoub" || 10 >0);

console.log()



console.log(100 == "100"); // true
console.log(100 !== 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(- -50 != +"-40"); // true
console.log(- 10 != -"-40"); // true
console.log(+ "10" == 10); // true
console.log(+ 20 > false); // true

let num1 = 10;
let num2 = 20;

console.log(num1 != num2);
console.log(num1 !== num2);
console.log(num1 <= num2);
console.log(num2 >= num1);


let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a < b); // true
console.log(a < b || a < c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true

const x = 10;



console.log(x);
let price = 100;
let discount = true;
let discountAmount = 30;
let country = "KSA";
let student = true;

if(discount === true){
    price -= discountAmount;
}
else if (country === "Egypt" && student === true){
        price -= discountAmount + 30;   }
    else{
        price -= discountAmount + 10;
    }
console.log(price);


let theName = "Benoo";
let theGender = "Male";
let theAge = 100;

if(theGender === "Male"){
    console.log("Mr");
}else{
    console.log("Mrs");
}

theGender === "Male" ?  console.log("Mr") :  console.log("Mrs");

let theResult = theGender === "Male" ?("Mr") :("Mrs");

console.log(`Hello ${theGender === "Male" ?("Mr") :("Mrs")} ${theName}`);

theAge < 20 ? console.log("younger than 20")
: theAge >= 20  && theAge <= 50 ? console.log("between 20 -50")
: theAge >= 60 && theAge <= 80 ? console.log("High")
:console.log("old") ;

let thePrice = "";

console.log(`the price is ${thePrice || 200}`);
console.log(`the price is ${thePrice ?? 200}`);


let numOne = 9;
numOne < 10 ? console.log(`00${numOne}`):console.log("good") ;

let numTwo = 20;
numTwo <= 100 ? console.log(`0${numTwo}`):console.log("good") ;

let numThree = 110;
numThree >= 100 ? console.log(`${numThree}`):console.log("good") ;

let num1 = 9;
let str = "9";
let num2 = "20";

num1 == str ? console.log(`${num1} is the same value as ${str}`) : true;
num1 !== str ? console.log(`${num1} is the same value as ${str} But to the same type`) : true;
num1 !== num2 ? console.log(`${num1} Is Not The Same Value Or The Same Type As ${num2}`) : true;


var num1 = 11;
var num2 = 10;
var num3 = 11;
var num4 = 33;


  Do Not Edit Below This Line
  Needed Output
  True 7 Times


// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}

let a = 10;
a < 10 ? console.log(10)
:a >= 10 && a <= 40 ? console.log("10 to 40")
:a > 40 ? console.log("> 40")
:console.log("Unknown").

let st = "Elzero web School";

if(typeof st === typeof "34"){
    console.log("good");
}
if(st.slice(0 , 6 ).repeat(2) === "ElzeroElzero"){
    console.log("good");
}

let day = 10;

switch (day){
    default:
        console.log("Uknown Day")
        break;
    case 0:
        console.log("saturday")
        break;
    case 1:
        console.log("sunday")
        break;
    case 2:
    case 3:
        console.log("monday")
        break;

    case 4:
        console.log("wednsday")
        break;
    case 5:
        console.log("thursday")
        break;



}

let job = "Manager";
let salary = 0;

switch(job){
    case "Manager":
        salary="8000";
        console.log(`my money is ${salary}`);
      break;
    case "IT":
    case "Support":
       console.log("salary = 6000");
       break;
    case "Developer":
    case "Designer" :
        console.log("salary = 7000");
        break;
    default:
        console.log("salary = 4000");


}

let holidays = "shubra";
let money = 0;

if(holidays === "maldives"){
    console.log(`money = 5000`)
}
else if(holidays === "matrouh" || holidays === "shubra"){
   console.log(`money = 1000`);
}


let line = "   hero    "
let day = line.trim()[0].toUpperCase() + line.trim().slice(1) ;



switch(day){
    case  "Friday":
    case   "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
        break;
    case "Moneyday":
    case  "Thurday":
        console.log("From 10:00 AM To 5:00 PM");
        break;
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
        break;
    case "wednesday":
        console.log("From 10:00 AM To 7:00 PM");
        break;
    default :
        console.log("Its Not A Valid Day");

}

const car = ["Saab" , "Volvo" , "BMW"];

const benoo = [];

benoo[0] = "mercesedes";
benoo[1]="octaive";
benoo[2]= "bejeau";

console.log(benoo);

let fav = benoo[0];
console.log(fav);

benoo[0]="borche";
console.log(benoo[0]);


 converUsdToReal = () => {
  "use strcict";
  let amount = document.getElementById("dollar").value ;
  let result = amount * 3.75;
  let message = document.getElementById("price")
  /*let price = message.innerHTML = `your message in dollar is ${result}`; 
  amount === ""?
     message.innerHTML = "please type a number":

  isNaN(amount)?
     message.innerHTML = "please type a number":
  amount === "0" ?
    message.innerHTML = "please type a number larger than 0":
 
 amount < 0?
  message.innerHTML = "please type a number larger than 0":
 
 amount > 10000?
  message.innerHTML = "please type a number smaller number":
 
     message.innerHTML = "your message in dollar is " + result ;
  
 }


 let myInput = document.getElementById("dollar"),
     myDiv = document.getElementById("div");

      calcUsd = () =>{
        "use strict";
        myDiv.innerHTML= myInput.value * 3.75;
      } 
  




      let friends = [];

      friends[0]="benoo";
      friends[1]="remon";
      friends[2]="miko";
      friends[3]="kiko";

console.log(friends instanceof Array);

console.log(friends.push("jan"));
console.log(friends.pop());
console.log(friends.toString());
console.log(friends.join("."));
console.log(friends.toLocaleString());


let myDate = new Date(),
myString = myDate.toLocaleString();

console.log(myDate);
console.log(myString);


let friends = [];

friends[0]="benoo";
friends[1]="remon";
friends[2]="miko";
friends[3]="kiko";
friends[4]="sandra";
friends[5]="mama  ";

console.log(friends.length);
console.log(friends);

friends[friends.length] = "baba";

console.log(friends.length);
console.log(friends);

friends.push("jan");
console.log(friends.length);

friends.pop();
console.log(friends.length);


friends.unshift("jossey")
console.log(friends);

friends.shift();
console.log(friends); 

console.log(friends);

let myIndex = friends.indexOf("kiko");

console.log(myIndex);

friends.splice(4 , 0 , "jan" , "david");
console.log(friends);

friends.sort();

console.log(friends)

console.log(friends.slice(1,5))
console.log(friends.slice(-6 , -1))

let newFriends = ["bisho" , "mina"];

friends.unshift(newFriends[0] ,newFriends[1] );

console.log(friends);





let friends = [];

friends[0]="benoo";
friends[1]="remon";
friends[2]="miko";
friends[3]="kiko";
friends[4]="sandra";
friends[5]="mama  ";



let specialFriend = friends.lastIndexOf("kiko" , 2);
console.log(specialFriend); 

console.log(friends[3]);



let numbers = [15 , 100, 20 , 500];


console.log(numbers.sort(function(a , b) {return a - b})); 




alert("hello world")



console.time("Hello");
      console.log("Hello Every One");
      console.log("Hello Every One");
      console.log("Hello Every One");
      console.log("Hello Every One");
      console.log("Hello Every One");
      console.log("Hello Every One");
console.timeEnd("Hello");

// var , let , const 

var name = "Abanoub Khalaf";
console.log(name);
name = "steve";
console.log(name);


// init var
var greeting;
console.log(greeting);
greeting = "easy";
console.log(greeting);

// letters , numbers, _ , $
//cant start with numbers
// $ not recomnding 
// _ its ok 

//Milt word vars 

var firstName = "John" ; // camelCase
var first_name = "sara"; //underscore;
var FirstName = "Tom"; // Pascal case








// const
const person = {
  name :"john",
  age :26
}

person.name = "benoo";
console.log(person);

const number = [1,4,8,6,8];
number.push(6);
console.log(number);


//primitive types

//strings

const name = "benoo";



//numbers

const age = 45;

//bolean

const hasKids = true;

//null

const car = null;

//undefined

let test;




//symbol

const sym = Symbol();




//Ref types

//array 
const hobbis = ["music" ,"movies"];

//objects
const adress = {
  city:"bolstan",
  sttate:"alex"
}
//date\

const today = new Date();
console.log(today);

console.log(typeof today);



let val ;
//numbers to string
val = String(555);
val = String(4 + 4 )
//bool to strings
val = String(true)
//date to string
val = String(new Date());
//array to string 
val = String([1,5,8,9]);

val = (4+5).toString();

// String to NUmers
val = Number("5");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("Hello");
val = parseInt("100.30")
val = parseFloat("100.30")



console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));
//console.log(val.length);


const val1 = String(5);
const val2 = 6;

const sum = val1 + val2;

console.log(sum)
console.log(typeof sum);



const num1 = 100;
const num2 = 50;
let val;
//simple math
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// Math Object

val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.4);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8,2);
val = Math.min(8,2);
val = Math.max(8,2);

val = Math.floor(Math.random() * (100 -95) +1  ) + 95


console.log(val);



const firstName = "ABanoub";
const lastName = "Khalaf";
let val;

val = firstName + lastName;

//concat
val = firstName + " " + lastName;

//Append 

val = "brad";
val +="Benoo";

val = "hello" + " "+firstName + " " +lastName;

//escaping

val = "that\" is awesome ";
// length
val = firstName.length;

//concat 
val = firstName.concat(" " , lastName);

val = firstName.toUpperCase();
val = firstName.toLowerCase();
val = firstName[0]

//indexof

val = firstName.indexOf("A")
val = firstName.lastIndexOf("a")

//charat()

val = firstName.charAt(3);
val = firstName.charAt(firstName.length - 1);

//substring
val = firstName.substring(0,4);

//slice
val = firstName.slice(-5,-1);

//string to array 
val = firstName.split("");

//replace
val = firstName.replace(/abanoub/gi , "Benoo");

//includes
val = val.includes("B")
console.log(val);


const name = "ABanoub";
const age = 26 ;
const job = "web developer";
const city = "Alex";
let html;

// without template strings

html = "<ul><li>Name: " +name+"</li> <li>age: "+ age +"</li> <li> job: "+ job +"</li> <li>city: "+ city +"</li></ul>";

//with template string (es6)
function hello (){
  return hello
}

html = `
<ul>
<li>Name: ${name}</li>
<li>age ${age}</li>
<li>job ${job}</li>
<li> ${2+2}</li>
<li> ${hello()}</li>
<li> ${age > 30 ? "over":"under"}</li>
<li> ${city}</li>
</ul>
`
document.body.innerHTML = html;

*/
// create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruits = ["apple", "banana", "oranfge"];
const mixed = [22, "hello", true, undefined, null]

/*
let val;
//array legnth
val = numbers.length;
//chech if its array
val = Array.isArray(numbers);
//get single value 
val = numbers[0]
// insert to array
numbers[2] = 100
//find index
val = numbers.indexOf(44);
//add
val = numbers.push(10);
//remove
val = numbers.pop();
// from front
val = numbers.shift();
val = numbers.unshift();
//splice
val = numbers.splice(1,0 , 33 , 56)
//reverse 
val = numbers.reverse()

val = numbers.concat(numbers2);
val = numbers.sort(function(x,y){return x-y});
val = numbers.sort(function(x,y){return y-x});

//find 
function under50 (num){
return num <= 50
}

val=numbers.find(under50);


console.log(numbers)
console.log(val);

//object literals
const person = {
  firstName : "Steve",
  lastName : "Smith",
  age : 30 ,
  email : "abanoub.khalaf1995@gmail.com",
  hobbies : ["music" , "sports"],
  adress : {city : "miami" , state :"FL"},
  getBirthday : function(){
    return 2021 - this.age;
  }
}
let val;
val = person;
val = person.firstName;
val = person["firstName"];
val = person["age"];
val = person.email;
val = person["hobbies"];
val = person.adress;
val = person.getBirthday();

console.log(val);

const people = [
  {name:"john" , age:26},
  {name : "mike" , age:23},
  {name : "mike" , age:23},
]

for(let i = 0  ; i < people.length ;i++){
  console.log(people[i].age)
}  

let val ;

const today = new Date();
let birthDay = new Date("9-10-1981 11:25:00");
 birthDay = new Date("September 10 1991 ");
 birthDay = new Date("9/ 10 1991 ");

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthDay.setMonth(0)
birthDay.setDate(16)
birthDay.setFullYear(1995)
birthDay.setHours(10)
birthDay.setMinutes(10)
birthDay.setSeconds(10)


console.log(birthDay);

*/

const id = 100;
/* 
//equal
if(id == 100){
  console.log("CORRECT");
} else{
  console.log("incorrect");
}
//not equal
if(id != 101){
  console.log("CORRECT");
} else{
  console.log("incorrect");
}
// equal value and type
if(id === 100){
  console.log("CORRECT");
} else{
  console.log("incorrect");
}
//not  equal value and type
if(id !== 100){
  console.log("CORRECT");
} else{
  console.log("incorrect");
}

// test if unddefined
if(typeof id === "undefined"){
  console.log("no id ")
}else{
  console.log(`the id is ${id}`)
}


//Greater or Less Than

if (id >= 100){
  console.log("true")
}else{
  console.log("false")
}
*/

// IF Else 

//const color = "black";
/*
if(color === "yellow"){
  console.log("color is yellow")
}
else if(color === "blue"){
  console.log("color is blue")
}else{
  console.log("color is not yellow or blue")
}


const name = "benoo";
const age = 64;
// && and
if (age > 0 && age <12){
  console.log(`${name} is a child`)
}else if(age > 13 && age <= 26){
  console.log(`${name} is a boy`)
}else{
  console.log(`${name} is an adult`)
}

//OR ||

if(age < 16 || age > 65){
  console.log(`${name} can runt the race`);
}else{
  console.log(`${name} can run the race`);
}

//TERNARY OPERATOR

console.log(id === 100 ? "coorect" : "incorrect");

//WithOut  Braces

if(id === 100)
console.log("correcr");
else console.log(incorrect);

const color = "black";

switch(color){
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
    default:
      console.log("color is not red or blue");
      break;
}

let day;

switch(new Date().getDay()){
  case 0:
    day = " sport";
    break;
  case 1:
    day = " sport";
    break;
  case 2:
    day = "3 Tuesday";
    break;
  case 3:
    day = "4 Wednesday";
    break;
  case 4:
    day = "5 Thursday";
    break;
  case 5:
    day = "6 Friday";
    break;
  case 6:
    day = "7 Saturday";
    break;
}

console.log(`${day}`)


// function declarations

function greet(firstName = "john", lastName= "khalaf" ){
 // if(typeof firstName === "undefined"){firstName = "john"}
 // if(typeof lastName === "undefined"){lastName = "khalaf"}
 return "hello " + firstName + " " +lastName;
}

console.log(greet("miko" , "kiko"));

// function exp

const square = function(x = 8){
  return x *x ;
}


//console.log(square());
 
(function(name){
  console.log("hello" + name);
})("benoo");


const todo = {
  add:function(){
    console.log("add todo ..");
  },
  edit : function(id = "benoo"){
    console.log(`edit to do ${id}`)
  }
}

todo.delete = function(){
  console.log("delete todo")
}
todo.add;
todo.edit();
todo.delete();
console.log(todo);


// for loop

for(let i = 0; i <= 10 ; i++){
  
  if(i === 2 ){
    console.log("two is my fav number")
    continue;
  }
  if(i===5){
    console.log("stop loop")
    break;
  }
  console.log(i);
}


// while loop

let i = 0;

while (i <= 10){
console.log("number high" + i)
i++;
}


//do while

// let i = 100;

// do{
//   console.log("number " + i);
//   i++;
// } while(i < 10)

const cars = ["ford" , "chevy" , "honda" , "toyota"];
// let i = 0;
// while ( i < cars.length){
//   console.log(cars[i]);
//   i++;
// }

//FOR EACH
// cars.forEach(function(car , index , array){
// console.log(`${index} :${car}`);
// console.log(array);
// })



//  console.log(ids)

// const user = {
//   firstName:"john",
//   lastName :"doe",
//   age:40
// }

// for (let x in user){
//   console.log(`${x} = ${user[x]}`);
// }                                                                                                                   

//windows metha ojects prop

// window.console.log(123)

// //alert

// window.alert("hello")

// const input = prompt();
// alert(input10)

//confirm

// if(confirm("are you sure")){
//   console.log("yes")
// }else{
//   console.log("no")
// }

let val ;

// val = window.outerHeight;
// val = window.innerHeight;
// val = window.innerWidth;
// val = window.outerWidth;


// scroll

// val = window.scrollY;
// val = window.scrollX;

// val = window.location;
// val = window.location.href;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.search;

//redirect

// window.location.href = "http://google.com";

//HISTORY OBJECT

// window.history.go();
// val = window.history.length;
// val = window.navigator;
// // val = window.navigator.appName;
// // val = window.navigator.appVersion;
// // val = window.navigator.userAgent;
// // val = window.navigator.platform;
// // val = window.navigator.vendor;
// // val = window.navigator.language;

// console.log(val)



const users = [
  {id:1 , name : "john"},
  {id:2 , name : "sara"},
  {id:3 , name : "kareem"}
 ];

 const ids = users.map(function(user){
   return user.id;
 });
 console.log(ids);


// let val ;

// val = document;
// val = document.all[0];
// val = document.all.length;
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;
// val = document.forms;

let scripts = document.scripts;
let scriptarray = Array.from(scripts)
scriptarray.forEach(function(script){
console.log(script)
})


// document.getelemntbyid)

// console.log(document.getElementById("task-title"))
// console.log(document.getElementById("task-title").id)
// console.log(document.getElementById("task-title").className)

// const taskTitle = document.getElementById("task-title");

// style

// taskTitle.style.background = "black";
// taskTitle.style.color = "#fff";
// document.getElementById("task-title").style.display = "none";

// change content

// taskTitle.textContent = "Task List";
// taskTitle.innerText = "my List";
// taskTitle.innerHTML = "<span style = 'color:red'> list </span>";

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.add'));
// console.log(document.querySelector('h2'));

// document.querySelector("ul li:last-child").style.color = "red";
// document.querySelector("ul li:nth-child(even)").style.color = "red";

// get elements by classname

// const items = document.getElementsByClassName("collection");
// console.log(items);

// items[0].style.color="blue";
// items[0].textContent = "hello";

// const listItems = document.querySelector("ul").getElementsByClassName("collection");

// console.log(listItems);

// document get elemnt by tag name

// let lis = document.getElementsByTagName("li");
// console.log(lis);
// console.log(lis[0]);

// lis[0].style.color="blue";

// lis = Array.from(lis);

// console.log(lis)
// lis.sort();
// lis.forEach(function(li , index){
// console.log(li.className);
// li.textContent = `${index} : hello`;
// })

//document.queryselectorall;

// const items = document.querySelectorAll('li.collection');
// console.log(items);

// items.forEach(function(item , index){
//   item.textContent = `${index} : Hello`;
// })

// const items = document.querySelectorAll('li:nth-child(odd)');


//  items.forEach(function(item , index){
//    item.style.color = 'grey';
//  })

//  for(let i = 0 ; i < items.length; i++){
//    items[i].style.background = "black";
//  }
let val ;
const list = document.querySelector("ul");
const listItem = document.querySelector("li.collection:first-child");

val = listItem;
val = list;

//get childnodes

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

//get childeren elemnts node

 val = list.children;
 val = list.children[0];

 //children of children

list.children[3].children[0].id = "test-text";
 val = list.children[3].children[0];
//first child
 val = list.firstChild;
 val =  list.firstElementChild;
//last child
 val = list.lastChild;
 val = list.lastElementChild;
 //count child elements

 val = list.childElementCount;

//get parent nodde
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//get siblings

val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(val);


//create elemnent

const li = document.createElement("li");
//add class
li.className = "hello";
//add atrr
li.setAttribute("title" , "test")
//append in
li.appendChild(document.createTextNode("hello world"));
//create new link elem
const link = document.createElement("a");
link.className = "helloone"
//add icon html
link.innerHTML ='<i class="fas fa-minus-circle"></i> ';

//append link to li
li.appendChild(link);
//append li as child to lul
document.querySelector('ul').appendChild(li);
console.log(li);


const newHeading = document.createElement('h2');

newHeading.id = "task-title";

newHeading.appendChild(document.createTextNode("hello here"))

const oldHeading = document.getElementById('task-title');

const cardAction = document.querySelector("#replace");

cardAction.replaceChild(newHeading , oldHeading);




const lis = document.querySelectorAll("li");
const list = document.querySelector('ul');

lis[0].remove();
list.removeChild(lis[2]);

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val ;

 val = link.getAttribute('href');
 val = link .setAttribute("href" , "http://googl.com")
 val = link .hasAttribute("href" , "http://googl.com")
 link.classList.add("test");
 link.className = "hello"
 
console.log(link);

document.querySelector('.clear').addEventListener('click', onClick)

function onClick(e){
let val ;

val = e;

//event target

val = e.target;
val = e.target.className;
val = e.target;

val = e.target.innerText = "click";

val = e.type;

val = e.timeStamp;

val = e.clientY;
val = e.clientX;


val = e.offsetY;
val = e.offsetX;


console.log(val);
}


const clearBtn = document.querySelector(".clear");

const card = document.querySelector('.main');

const heading = document.querySelector('h2');
card  .addEventListener('mousemove' , runEvent)
function runEvent(e){
console.log(`EVENT TYPE : ${e.type}`)

heading.textContent = `mousex : ${e.offsetX} mousey : ${e.offsetY}`;
document.body.style.backgroundColor = `rgb(${e.offsetX} , ${e.offsetY} , 40 )`;
}


const form = document.querySelector('form');
const taskInput = document.getElementById('let');
const select = document.querySelector("select");

select.addEventListener('change' , runEvent);

function runEvent(e){
  console.log(`Event type = ${e.type}`);
  e.preventDefault();
}

  taskInput.addEventListener('focus' , function(){
   document.querySelector("label").style.bottom = '0';
   document.querySelector("label").style.transition = '0.3s';
 })

  taskInput.addEventListener('blur' , function(){
    if(taskInput.value === ""){
      document.querySelector("label").style.bottom = '-12px';
    }else{
      document.querySelector("label").style.bottom = '0px';
    }
  })


//event bubbling

// document.querySelector('h2').addEventListener('click' , function(){
//   console.log('hello')
// })

// document.querySelector('.header').addEventListener('click' , function(){
//   console.log('header')
// })

// document.querySelector('.container').addEventListener('click' , function(){
//   console.log('container')
// })

//event delgation 

// const deleteItem = document.querySelector('.delete-item');

// deleteItem.addEventListener('click' , function(){
//   console.log('delete')
// })

document.body.addEventListener('click',deleteIte)

function deleteIte(e){
   if(e.target.parentElement.classList.contains("delete-item")){
    e.target.parentElement.parentElement.remove()
   }
}

  // }

// how to set local storge item

//  localStorage.setItem("name" ,"benoo");
// // sessionStorage.setItem("name" ,"benoo");

// // localStorage.removeItem('name');

// const name = localStorage.getItem('name');

// console.log(name)



// document.querySelector('form').addEventListener('submit',function(e){
//   const task = document.getElementById('let').value;

//  let tasks;

//  if(localStorage.getItem('tasks') === null){
//    tasks = [];
//  }else{
//    tasks = JSON.parse(localStorage.getItem('tasks'));
//  }

//  tasks.push(task);

//    localStorage.setItem("tasks" ,JSON.stringify(tasks));


//   e.preventDefault();
// })



document.querySelector('form').addEventListener('submit',function(e){
  const task = document.getElementById('let').value;

let tasks;

if(localStorage.getItem('tasks') === null){
  tasks = [];
}else{
  tasks = JSON.parse(localStorage.getItem('tasks'));
}

tasks.push(task);

localStorage.setItem("tasks" , JSON.stringify(tasks));

  e.preventDefault();
})

*/

const form = document.querySelector('form');
const taskLikst = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear');

//inputs animation
const taskInput = document.getElementById('let');
const filter = document.getElementById('filter');

taskInput.addEventListener('focus', function () {
  document.querySelector("label").style.bottom = '0';
  document.querySelector("label").style.transition = '0.3s';
  document.querySelector("label").style.color = 'teal';
})

taskInput.addEventListener('blur', function () {
  if (taskInput.value === "") {
    document.querySelector("label").style.bottom = '-12px';
   document.querySelector("label").style.color = 'grey';
    
  } else {
    document.querySelector("label").style.bottom = '0px';
    
  }
})

filter.addEventListener('focus', function () {
  document.querySelector(".lab-filter").style.bottom = '0';
  document.querySelector(".lab-filter").style.transition = '0.3s';
  document.querySelector(".lab-filter").style.color = 'teal';

})
filter.addEventListener('blur', function () {
  if (filter.value === "") {
    document.querySelector(".lab-filter").style.bottom = '-12px';
    document.querySelector(".lab-filter").style.color = 'grey';
  } else {
    document.querySelector(".lab-filter").style.bottom = '0px';
  }
})






loadEventListeners();

function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', getTasks)
  form.addEventListener('submit', addTask);
  taskLikst.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTask);
  filter.addEventListener('keyup', filterTasks)
}

function getTasks() {
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task) {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fas fa-minus-circle"></i>';

    li.appendChild(link);

    taskLikst.appendChild(li);
  })
}


function addTask(e) {
if (taskInput.value === ""){
  alert("write a task")
}else{
  
 const li = document.createElement('li');
 li.className = 'collection-item';
 li.appendChild(document.createTextNode(taskInput.value));
 const link = document.createElement('a');
 link.className = 'delete-item secondary-content'
 link.innerHTML = '<i class="fas fa-minus-circle"></i>'
 li.appendChild(link);

 taskLikst.appendChild(li);

 storeTaskInLocalStorge(taskInput.value);
}
 e.preventDefault();
}


function storeTaskInLocalStorge(task) {
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);

  localStorage.setItem('tasks' , JSON.stringify(tasks));

}


function removeTask(e) {
  if (e.target.classList.contains("fa-minus-circle")) {
    if (confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();

      removeTaskFromLocalStorge(e.target.parentElement.parentElement);
    }
  }
}

function removeTaskFromLocalStorge(taskItem) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task , index ){
    if(taskItem.textContent === task){
      tasks.splice(index,1)
    }
  })
  localStorage.setItem('tasks' , JSON.stringify(tasks));
  
}


function clearTask() {

  while (taskLikst.firstChild) {
    taskLikst.removeChild(taskLikst.firstChild);
    
  }
  clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage(){
 localStorage.clear();
}

function filterTasks(e) {
const text = e.target.value.toLowerCase();
console.log(text);

document.querySelectorAll('.collection-item').forEach(function(task){
const item = task.textContent;

if(item.toLowerCase().indexOf(text) != -1){
  task.style.display = 'flex';
}else{
  task.style.display = 'none';
}
})
}
