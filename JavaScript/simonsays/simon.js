let gameSeq=[];/*two array are defined where one will store the sequence of buttons flashed by game and other will store sequence of buttons pressed by user if it matches then game continues else game is declared to over */
let  userSeq=[];

let btns=["blue","yellow","purple","green"];//this array will store all the btns 

let started=false;
let level=0;

let h2=document.querySelector("h2");

/*STEP 1 : GAME STARTS ON PRESSING ANY KEY */
/*this event listner tracks any key press on the document and if key is pressed then game has started */
document.addEventListener("keypress",function()
{   if(started==false){ 
    /*this if condition makes sure the game starts only once i.e. even if any keypress after game has started it wont make any changes */
        console.log("game started");
        started=true;
        levelUp();//once game has started we'll levelup
    }
    
});

//STEP 2 :RANDOM BUTTON WILL FLASH SYMBOLISING START OF LEVEL ONE OR LEVEL UP(next level)
function btnFlash(btn){
    //btn i.e. is to be  flashed will be passed as an argument to the function
    btn.classList.add("flash");
    //this will set a bgcolor to btn by flash class then to blink that btn its class that gives bgcolor needs to be removed giving it a flash effect
    setTimeout(function(){
    btn.classList.remove("flash")
},250);
}


function usrBtnFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },250);
}

function levelUp(){
    userSeq=[];//when level is incremented userSeq is reste and user will have to again enetr the colors rembering its order
    level++;
    h2.innerText=`Level ${level}`;

    //choose random button
    let randomIndex=Math.floor(Math.random()*3);
    let randomColor=btns[randomIndex];//this will accesss the color at index generated using random function
    let randomBtn=document.querySelector(`.${randomColor}`);//this will select the random button and store it as .blue in the variable i.e. passed to btnFlash function

    gameSeq.push(randomColor);//we'll keep on adding the colors generated by the pc and flash it accordingly 
    console.log(gameSeq);
    btnFlash(randomBtn);
}

//STEP 3 : FLASH BUTTONS PRESSED BY USER

function checkAns(index){
    //we'll pass current level of game as argument for this function if level is 1 the gameSeq and userSeq each will have 1 value and last or the latest values are compared if all match then game is correct
    if(userSeq[index]===gameSeq[index]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);//this indicates colors are checked till  last and its time to level up as they are in correct sequence
            console.log("same value");
        }
    } else{
        h2.innerHTML=`Game Over!! Your score was <b>${level}</b><br> Press any key to start`;
        document.querySelector("body").style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor='white';   
        },250);
        reset();//game is reset once it is over
    }

}

function btnPress(){
  console.log("button pressed");
  let usrBtn=this; //here this refers to the button pressed by user
  usrBtnFlash(usrBtn);
userColor=usrBtn.getAttribute("id");//this will gett buttons id that stores color of that respective button
console.log(userColor);
userSeq.push(userColor);
//now we'll check whether color of button pressed by user matches with that of the game

checkAns(userSeq.length-1);//this will check whether the color pressed at last matches with gameSeq or not
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
  btn.addEventListener("click",btnPress);  
}

//STEP 4 :MATCHING SEQUENCE OF BOTH gameSeq ARRAY AND userSeq ARRAY AND CHECK WHETHER USER IS PLAYING CORRECLTLY

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}