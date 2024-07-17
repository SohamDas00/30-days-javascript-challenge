//Activity 1:
function evenodd(a){
    if(a%2==0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
let a=4;
evenodd(a);

function square(num){
    let squ=num*num;
    return squ;
}
let num=9;
let result=square(num);
console.log(result);


//Activity 2:
function max(x,y){
    if(x>y){
        return x;
    }
    else{
        return y;
    }
}
let x=9,y=7;
let maximum=max(x,y);
console.log(maximum);

function string(string1,string2,string3){
    let full=string1+" "+string2+" "+string3;
    return full;
}
let string1="Soham";
let string2="Plays";
let string3="Football";
let fullname=string(string1,string2,string3);
console.log(fullname);


//Activity 3:
let sum=(p,q)=>{
    return p+q;
}
let p=5,q=2;
let add=sum(p,q);
console.log(add);

let string=(name)=>{
    for(let i in name){
        if(i==='S'){
            return true;
        }
        else{
            return false;
        }
    }
}
const checkPresenceOfChar = (str, char) => {
    return str.includes(char)?'true':'false';
}
console.log(checkPresenceOfChar("apple", "e"));


//Activity 4:
function product(number1,number2){
    return number1*number2;
}
let number1=5,number2=3;
console.log((product(number1,number2)));

function geeting(getting_name,age){
    console.log(`Hi ${getting_name} you are ${age} years old`);
}
let getting_name="Soham"
let age=20;
geeting(getting_name,age);


//Activity 5:
function child() {
    console.log("This is a child function")
}

function parentFunction(callback, number) {
    console.log("This is parent function")
    console.log("Child will be called", number, "times")
    for (let i = 0; i < number; i++) {
        callback()
    }
}

parentFunction(child, 5)

function f1(numb) {
    console.log("First function is called:")
    return numb;
}

function f2(number) {
    console.log("Second function print the number", number)
}

function higherOrder2(f1, f2, num) {
    // let number = num;
    let number = f1(num)

    f2(number)
}

higherOrder2(f1, f2, 6)
