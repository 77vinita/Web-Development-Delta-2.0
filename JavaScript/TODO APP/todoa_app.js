let todo=[];

let req=prompt("enter your request");
console.log(req);
while(true)
{
    if(req=='quit')
    {
        console.log("quiting app");
        break;
    }
    if(req=='list')
    {
        console.log("----------------")
        for(let i=0;i<todo.length;i++){
            console.log(tasks);
        }
        console.log("---------------")
    }
    else if(req=="add")
    {
        let task=prompt("enter the task you want to add");//user enter a new task that should be added in the todo list so we'll push the enetred task in the todo list i.e todo array
        todo.push(task);
        console.log("task added");
    }
    req=prompt("enter your request");

}