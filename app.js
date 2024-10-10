let tasks =[];

let btn = document.querySelector("#btn");
let taskInput = document.querySelector("#taskInput");

btn.addEventListener("click",addTask);

// btn callback Function
function addTask(e){
    e.preventDefault();
    newTask();
}



function newTask (){
    let text = taskInput.value.trim();
    if(text){
        tasks.push({text:text,completed: false})
    }
    console.log(tasks);

}
