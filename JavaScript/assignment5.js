// Function to return sum of n numbers()
// function sumOf(n)
// {
//     let sum=0;
//   for(let i=1;i<=n;i++)
//   {
//     sum=sum+i;
//   }
//   return sum;
// }
// console.log(sumOf(5));

// QUESTION 1
// function that returns array elements larger than a number
// let arr=[2,6,9,4,8,10,12,30,5,7,11,13,14,15];
// let n=8;
// function arrEle(arr,n){
//   for(let i=0;i<arr.length;i++)
//   {
//     if(arr[i]>n)
//     console.log(arr[i]);
//   }
// }

// arrEle(arr,n);

// QUESTION 2
// Js function to extract unique characters from a string eg:"abcdeabcdefhkkhf" o/p="abcdefhk"
// let str="abcdebedshkhaherbrfidfhbvajbfhidsfbv";
// //function to display string with all unique elements
// function getUnique(){
// let ans="";//empty string
// for(let i=0;i<str.length;i++)
// {
//   let curChar=str[i];
//   if(ans.indexOf(curChar)==-1){
//     //if current character is not added the we'll add it to the answer

//     //otherwise duplicate it
//     ans=ans+curChar;
//   }
// }
// return ans;
// }
// let result=getUnique(str);
// console.log(result);

// QUESTION 3
// function that accepts list of country names as input and returns longest country name as input
// let country=["Australia","United States of America","Germany","Japan","India"];
// function longestName(country){
//    let ansIndx=0;
//    for(let i=0;i<country.length;i++){
//      let ansLen=country[ansIndx].length;//i.e value of ansLen is set to the length of the first name in the array
//      let currLen=country[i].length;//this value changes as value of i is incremented
//      if(currLen>ansLen){
//       ansIndx=i;
//      }
//   }
//    return country[ansIndx];
// }
// console.log(longestName(country));

// QUESTION 4
// function to count number of vowels in a string
// let str=prompt("enter a string:");
// let vowels=["a","A","e","E","i","I","o","O","u","U"];
// function countVowels(str,vowels){
//   let count=0;
//   for(let i=0;i<str.length;i++){
//     if(vowels.indexOf(str[i])!=-1){
//       count++;
//     }
//   }
//   return count;
// }

// let result=countVowels(str,vowels);
// console.log(`number of vowels in ${str} is ${result}`);

//QUESTION 5
//JavaScript function to generate a random number within a range (start,end).
let start=10;
let end=100;
function generateRandom(start,end)
{
  let diff=end-start;//this will calculate the count of numbers to be generated within the given range
  let ans=Math.floor(Math.random()*diff)+start;
  return ans;
}
console.log(generateRandom(start,end));
//this will display a random number generated within the range of 10 to 100