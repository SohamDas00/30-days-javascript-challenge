//Activity 1:
let array=[1,2,3,4,5];
console.log(array);
let first=array[0];
let last=array[4];
console.log(first);
console.log(last);


//Activity 2:
let array2=[1,2,3,4,5];
let push=array2.push(8);
console.log(array2);
let pop=array2.pop();
console.log(array2);
let shift=array2.shift();
console.log(array2);
let unshift=array2.unshift(9);
console.log(array2);


//Activity 3:
let array3=[1,2,3,4,5];
let maparray=array3.map((num)=>num*num);
console.log(maparray);

const myarr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let mynewarr = myarr1.filter((value) => {
    return value % 2 == 0  
})
console.log(mynewarr);

const myarr2 = [10, 20, 30, 10]

let initialValue = 40
let myTotal = myarr2.reduce((acc, crntvalue) => {

    return acc + crntvalue
}, initialValue)

console.log(`your total is Rs. ${myTotal}`);



//Activity 4:
const myarr3 = [1, 2, 3, 4, 5]

for (let i = 0; i <= myarr3.length - 1; i++) {

    console.log(myarr3[i]);
}

const myarr4 = [1, 2, 3, 4, 5]

myarr4.forEach((elem) => {
    console.log(elem);
})



//Activity 5:
let twoDiarr = [
    [10, 20, 30, 40, 50],
    [11, 12, 13, 14, 15]
]
console.log(twoDiarr);

console.log(twoDiarr[0]); // access the 0th index of array of matrix 
console.log(twoDiarr[1]);  // access the 1st index of array of matrix 
console.log(twoDiarr[1][3]); // access the 1st index of array of matrix  4rd element