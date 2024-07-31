// //ASSIGNMENT 1
// //QUESTION 1 1.Create a number variable num with some value.Now,print “good” if the number is divisible by 10 and print “bad” if it is no
let num=prompt("enter a number");
if(num%10==0)
{
    console.log("GOOD");
}
else
{
    console.log("BAD");
}

// // //QUESTION 2 Take the user's name & age as input using prompts.Then return back the following statement to the user as an alert(by substituting their name & age
let userName=prompt("enter your name");
let age=prompt("enter your age");
console.log(`${userName} is ${age} years old`);


// //QUESTION 3
let q=prompt("enter quater number to displays its months");
switch(q)
{
    case '1':console.log("January,February,March");
           break;
    case '2':console,log("April,May,June");
         break;
    case '3':console.log("July,August,September");
        break;
    case '4':console.log("October,November,December");
        break;
    default:console.log("invalid input");                    
}

// //QUESTION 4 4.A string is a golden string if it starts with the character‘A’or‘a’and has a total length greater than 5.
let string=prompt("enter a string:");
if(string[0]=='A' || string[0]=='a' || string.length>5)
{
    console.log(`${string} is a golden string`);
}
else
{
    console.log(`${string} is not golden string`);
}


//QUESTION 5 Write a program to find the largest of 3 numbers
let firstNum=4;
let secondNum=7;
let thirdNum=2;

if(firstNum>secondNum && firstNum>thirdNum)
{
    console.log(`${firstNum} is greater of the three numbers`);
}

else if( secondNum>thirdNum)
{
    console.log(`${secondNum} is greater of the three numbers`);
}

else
{
    console.log(`${thirdNum} is greater of the three numbers`);
}


// //QUESTION 6 Write a program to check if 2 numbers have the same last digit.Eg:32 and 47852 have the same last digit i.e.2
let num1=prompt("enter first number");
let num2=prompt("enter second number");
if(num1%10==num2%10)
{
    console.log(`${num1} and ${num2} have their last digits same`);
}
else
{
    console.log(`${num1} and ${num2} do not have their last digits same`);
}
