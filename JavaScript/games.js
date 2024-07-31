// let favMovie="taqdeer";
// let guess=prompt("guess my favorite movie");


// while((favMovie != guess))
// {
//     if(guess=='quit')
//     {
//         console.log("you quit");
//         break;
//     }
//     guess=prompt("Try again :(");
// }
// if(favMovie==guess)
// {
//     console.log("Congratulations!!!!!!!!!");
// }

let max=prompt("Enter a number of your choice");
let random=Math.floor(Math.random()*max)+1;
console.log(random);
let guess=prompt(`Guess the number generated from 1 to ${max}`);

while(true)
{
    if(guess=='quit')
    {
        console.log("User Quit");
        break;
    }
    if(guess==random)
    {
        console.log("Congratulations you have guessed the right number i.e",random);
        break;
    }
    else if(guess<random)
    {
        guess=prompt("hint: your guess is smaller than the number generated......please try again");
    }

    else if(guess>random)
    {
        guess=prompt("hint: your guess is greater than the number generated......please try again");
    }
}