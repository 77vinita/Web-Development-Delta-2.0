//Add following elements to the container using only javascript and DOM methods
//(i) add para element with red text that says hel i'm red
let para1 = document.createElement('p');
para1.innerText="Hey I'm red !!";
document.querySelector('body').append(para1);
para1.classList.add('red');
 //create h3 with blue text
 let heading=document.createElement('h3');
 heading.innerText="hey I'm a blue h3";
 document.querySelector('body').append(heading);
 heading.classList.add('blue');

 // add div element with black border pink bgcolor and following elements within it :h1 tag saying i am in div and p tag saying me too!

 let div=document.createElement('div');
 let h1=document.createElement('h1');
 h1.innerText="I'm in a div";
 let p=document.createElement('p');
 p.innerText='ME TOO!';
 div.append(h1);
 div.append(p);
 div.classList.add('box');
 document.querySelector('body').append(div);

//ASSIGNMENT 
//q1 create new input a button element on pg using javascript set btn text as click me
let btn=document.createElement('button');
btn.innerText='Click me';
let input=document.createElement('input');
document.querySelector('body').append(btn);
document.querySelector('body').append(input);

//q2 add given attribute to element:change placeholder value of input to username......change id of button btn
input.setAttribute('placeholder','username');
btn.setAttribute('id','btn');

//q3 access button using querySelector and btn id change btn bgcolor to blue nd text color to white
let button=document.querySelector('#btn');
button.classList.add('btnstyle');

//q4 create h1 element and set its text as DOM Practice underlined nd change color to purple
let heading1=document.createElement('h1');
heading1.innerHTML='<u>DOM Practice</u>'
document.querySelector('body').append(heading1);
heading1.classList.add('red');

//q5 create para tag n set text as Apna College Delta Practice where Delta is bold
let para2=document.createElement('p');
para1.innerHTML='Apna College <b>Delta</b> Practice';
document.querySelector('body').append(para1);

