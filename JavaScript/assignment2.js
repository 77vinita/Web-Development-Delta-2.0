//ASSIGNMENT 2
//QUESTION 1 JS PROGRAM TO GET FIRST N ELEMENT FROM AN ARRAY

let a1=[9,4,2,7,-1,-6,12];
let n1=prompt("enter a number");
let firstNelements=a1.slice(0,`${n1}`);
console.log(firstNelements);

//QUESTION 2 :JS PROGRAM TO GET LAST N NUMBERS FROM AN ARRAY

let a2=[4,8,2,12,7,9,3];
let n2=prompt("enter a number");
let lastNelements=a2.slice(-`${n2}`);
console.log(lastNelements);

//QUESTION 3 JS PROGRAM TO CHECK WHETHER STRING IS BLANK OR NOT

let str1=prompt("enter a string");

if(str1.length==0)
{
    console.log("string is empty");
}
else
{
    console.log(`${str1}`);
}

//QUESTION 4:CHECK WHETHER GIVEN CHARACTER OR INDEX IS LOWERCASE

let str2=prompt("enter a string");
console.log(str2);
let n=prompt("enter a number to check if character at that index is lowercase or not");

if(str2[n]>='a' || str2[n]>='z' )
{
    console.log(`character at ${n} is lowercase `);
}
else
{
    console.log(`character at ${n} is not lowercase `);
}

//QUESTION 5:JS PROGRAM TO STRIP LEADING AND TRAILING SPACES FROM A STRING

let str3=prompt("enter a string");
console.log(str3);
if(str3[0]==' ' ||str3[str3.length-1]==' ')
{
    console.log(`string after stripping leading and trailing spaces is '${str3.trim()}'`);
}
else
{
console.log("no leading and trailing space available in the string")
}


//QUESTION 6:JS PROGRAM TO CHECK WHETHER GIVEN ELEMENT EXISTS IN THE ARRAY OR NOT 
let arr1=[1,7,4,8,3,2,10];
console.log(`entered array is ${arr1}`);
 let ele=7;
 //prompt("enter element to be searched");
if(arr1.indexOf(ele) != -1)
{
    console.log(`${ele} exists in the array at ${arr1.indexOf(ele)}th index`);
}
else
{
    console.log(`${ele} does not exist in the array`);
}








