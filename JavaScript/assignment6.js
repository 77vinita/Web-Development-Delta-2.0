//PRACTICE QUESTION 1
//arrow function that returns the square of a number
// const square=(n)=>(
//     n*n
// );
//PRACTICE QUESTION 2
//function that prints "HELLO WORLD" 5 times at interval of 2s each
//total time take to print "Hello World" 5 times is 2*5 i.e 10sec which means we'll have to stop the setInterval function after 10 sec so we'll create a setTimeout function that will clear the setInterval function after 10sec by passing its id to stop its execution
//1sec=1000 milliseconds
let id=setInterval(()=>{
console.log("Hello World");
},2000);
setTimeout(()=>{clearInterval(id);
console.log("Interval cleared successfully");
},10000);

//Question 1
//accept array of numbers and return average of those numbers

let arr=[1,2,3,4,5,6,7,8,9];
const average=(arr)=>{
       let sum=0;
       for(let i=0;i<arr.length;i++){
        sum+=arr[i];
       }
       return sum;
}
console.log(average(arr));

//arrow function to check whether given number  is even or not
const isEven=(num)=>{
    if(num%2==0)
    return 1;
    else
    return 0;
}

//
const object={
    message:'Hello,World!',

    logMessage(){
    console.log(this.message);
}
};
setTimeout(object.logMessage,1000);