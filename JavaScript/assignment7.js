// let arr=[{
//     name:"Ravi",
//     marks:90,
//     age:23
// },{
//     name:"Kavita",
//     marks:93,
//     age:22
// },{
//     name:"Riya",
//     marks:89,
//     age:21
// },{
//     name:"Priya",
//     marks:90,
//     age:20
// }];

// arr.forEach((ele)=>{
//     console.log(ele);
//     console.log(ele.marks);
// });

// let num=[3,4,6,7,9,12,3,4,21,9];
// let result=num.reduce((max,el)=>{
//     if(el>max){
//         max=el;
//         return max;
//     }else{
//         return max;
//     }
// });
// console.log(result);

// //function to print minimum of an array
// let arr=[4,5,6,7,8,12,13,1,2];
// let ans=arr.reduce((min,ele)=>{
//     if(ele<min){
//         min=ele;
//         return min;
//     }else{
//         return min;
//     }
// })

//QUESTION 1
//square and sum array elements using arrow function then find avg of that array
let arr=[1,2,3,4,5,6,7,8];
let square=arr.map((el)=>el*el);//this will square each array element and store the square in new array
let sumOfSquare=square.reduce((sum,el)=>sum+el);//give sum of the squares of the array elements
let avg=sumOfSquare/arr.length;

//QUESTION 2
//create new array where each ele plus 5 of the original element
let arr1=[1,2,3,4,5];
let fiveTimesOri=arr1.map((el)=>el+5);
console.log(fiveTimesOri);

//QUESTION 3
//create new array whose elements are in uppercase of original array
let strings=["tony","vinit","vicky","anay","ravi","vir"];
let newArr2=strings.map((str)=>str.toUpperCase());
console.log(newArr2);

//QUESTION 4
//4.Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.The function should return a new array with the original array values and all of the additional arguments doubled
//this function accepts an array along with n number of arguments bundled up as array in arg
const doubleAndReturnArgs=(arr,...arg)=>{
    return [...arr,//returns the original array first using the spread operator
    ...arg.map((el=>el*2))];//doubles all values of the argument
};


















