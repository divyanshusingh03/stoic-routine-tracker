let tasks= [];
let saved= localStorage.getItem("data");
tasks= saved? JSON.parse(saved): [];


let form= document.getElementById("form");
let inpTask= document.getElementById("task");
let btn= document.getElementById("trigger");
let cont= document.getElementById("task-container");

function update(){

    let str= JSON.stringify(tasks);
    localStorage.setItem("data", str);


}


form.addEventListener("submit",(e)=> {

    e.preventDefault();
     if(inpTask.value==""){

         return;

     }
    tasks.push({name: inpTask.value, isCompleted: false});
    console.log(tasks);
    update();
    renderTasks();
    inpTask.value="";

});

function renderTasks(){

    cont.innerHTML="";

tasks.forEach((singleTask, index)=>{

    let textStyle;
    if(singleTask.isCompleted==true){
        textStyle= "text-decoration: line-through; color: grey;"
    }

    cont.innerHTML+=`
    <div>
    <span style= "${textStyle}">${singleTask.name}</span>
    <button onclick="toggle(${index})">✔️</button>
    <button onclick="deleteTask(${index})">❌</button>
    </div>`;

});

}

function deleteTask(index){

    tasks.splice(index, 1);
    update();
    console.log("Final List= ", tasks);
    renderTasks();

}

renderTasks();

async function api(){

 try{   

    console.log("[Status]: Initializing...");
    let response= await fetch('https://dummyjson.com/quotes/random');
    let rawData= await response.json();
    console.log("[Target Acquired: ]", rawData);
    document.getElementById('quote').innerText= rawData.quote;
}catch(error){

    console.log("[Mission Failed: ]", error);

}



}

api();

function toggle(index){

    tasks[index].isCompleted= !tasks[index].isCompleted;
    update();
    renderTasks();

}