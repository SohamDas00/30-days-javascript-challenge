//Activity 1:
let name="Soham Das"
let age=20
let message=`Hi myself ${name} i'm ${age} years old`;

console.log(message);

let multis=`Soham is a good boy.
Offbeat Love Stories and More
Butterfly Weeds  	
Somebody Everybody Listens To  
The Secrets of the Starbucks Lovers`;

console.log(multis);


//Activity 2:
let array=[2,5,7,9];
let[first,secound]=array;

console.log(`The first element is ${first}`);
console.log(`The secound element is ${secound}`);

let book = {
    title: " TO kill a Moackingbird",
    author: "HArper lee",
    year: 1960
 }
 
 let { title, author } = book;
 
 console.log(`The title of the book is : ${title} `);
 console.log(`The author of the book is : ${author}`);


//Activity 3:
let arr=[1,2,3,4];
let newarr=[...arr,5,6,7,8];

console.log(newarr);


//Activity 4:
function multi(a,b=5){
    return a*b;
}
let mul1=multi(5,6);
console.log(`result having two paramter: ${mul1}`);

let mul2=multi(5);
console.log(`result having one parameter: ${mul2}`);

