//ASSIGNMENT 4
//QUESTION 1 
//Program to generate random numbers between 1 and 6
let dice=Math.floor(Math.random()*5)+1;
console.log(dice);

//QUESTION 2 
//Create object representing a car with following properties:car name,model,color and print the car's name
const car={
    name:"Tata",
    model:"Tata_Nexon",
    color:"grey"
};
console.log(car.name);

//QUESTION 3
//Create an object person with their name,age and city edit city's original value to change it to "New York"
const Person={
    name:"Martin Cooper",
    age:23,
    city:"London",
};
console.log(Person);
Person.city="New York";
Person.country="United States";
console.log(Person);