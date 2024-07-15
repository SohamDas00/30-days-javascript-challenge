//Activity 1:
let number=56;
if(number>0){
    console.log("Number is positive");
}
else if(number<0){
    console.log("Number is negative");
}
else{
    console.log("Number is zero");
}

let age=67;
if(age>18){
    console.log("Person eligible to vote");
}
else{
    console.log("Person not eligible to vote");
}


//Activity 2:
let num1=12;
let num2=34;
let num3=56;
if(num1>num2 && num1>num3){
    console.log(`${num1} is largest`);
}
else if(num1>num2 && num1>num3){
    console.log(`${num2} is largest`);
}
else{
    console.log(`${num3} is largest`);
}


//Activity 3:
let week=1;
switch(week){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesdy");
        break;        
    case 5:
        console.log("Thrusday");
        break;
    case 6:
        console.log("Friday");
        break;    
    case 7:
        console.log("Saturday");
        break;      
    default:
        console.log("No week!");    
        break;
}

let score=97;
switch(true){
    case score>80 && score<=100 :
        console.log("A");
        break;
    case score>60 && score<=80 :
        console.log("B");
        break;    
    case score>40 && score<=60 :
        console.log("C");
        break;
    case score>20 && score<=40 :
        console.log("D");
        break;
    case score>10 && score<=20 :
        console.log("E");
        break;
    default:
        console.log("No marks");        
}


//Activity 4:
let num=6;
let result=(num%2==0)?'Even':'Odd';
console.log(result);


//Activity 5:
let year = 2020
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
} 

