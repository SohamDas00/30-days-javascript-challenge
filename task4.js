//Activity 1:
for(let i=1;i<11;i++){
    console.log(i);
}

let n=5;
for(let i=1;i<11;i++){
    let table=n*i;
    console.log( table);
}


//Activity 2:
let num=1,sum=0;
while(num<=10){
    sum+=num;
    num++;
}
console.log(`Sum of 10 number is:${sum}`);

let number=10;
while(number>=1){
    console.log(number);
    number--;
}


//Activity 3:
let a=1
do{
    console.log(a);
    a++;
}while(a<=5)

let b=5,fact=1;
do{
    fact*=b;
    b--;
}while(b>=1);
console.log(`Factorial of 5 is:${fact}`);


//Activity 4:
let x = 5;
for (let i = 1; i <= x; i++) {
    let str = "* ";
    console.log(str.repeat(i));
}


//Activity 5:
for(let j=1;j<=10;j++){
    if(j==5){
        continue;    
    } 
    console.log(j);
}

for(let k=1;k<=10;k++){
    if(k==7){
        break;
    }
    console.log(k);
}
