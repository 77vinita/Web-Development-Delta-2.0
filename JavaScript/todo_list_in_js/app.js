let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    console.log(inp.value);
    let item=document.createElement("li");
    //now create a delete button
    item.innerText=inp.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add=("delete");//given class delete
    //now this button will be appended\attached to the list item as child
   item.appendChild(delBtn);

    ul.appendChild(item);

     inp.value="";//this resets value to empty after successfully adding it to the list
//i.e setting it to empty string after successful insertion
});

// let delButtons=document.querySelectorAll(".delete");//this select or refers to all buttons with class delete
// for(delBtn of dleBtns)//this selects one button i.e delBtn from group of buttons named delBtns 
// {
//     delBtn.addEventListner("click")
// }
ul.addEventListener("click",function(event)
{
    if(event.target.nodeName=="BUTTON"){
    let listItem = event.target.parentElement;
        listItem.remove();
    }
})