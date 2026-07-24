
const taskInput= document.getElementById("task-input");
const addBtn= document.getElementById("add-btn");
const taskList= document.getElementById("task-list");
const totalCount= document.getElementById("total-count");
const completedCount= document.getElementById("completed-count");
const pendingCount= document.getElementById("pending-count");

function addTask(){

    // Step 1: Read Input
    const task= taskInput.value.trim();

    // Step 2: Validate Input
    if(task === ""){
        alert("Please enter a valid task!");
        return;
    }

    // Step 3: Create Elements
    const taskItem= document.createElement("li");
    taskItem.className="task-item";
    const taskContainer= document.createElement("div");
    taskContainer.className= "task-container";
    const checkBox= document.createElement("input");
    checkBox.type= "checkbox";
    checkBox.className= "check";
    checkBox.addEventListener("change", updateStats);
    const taskName= document.createElement("span");
    taskName.className= "task-name";
    taskName.textContent= task;
    const deleteBtn= document.createElement("button");
    deleteBtn.className= "delete-btn";
    deleteBtn.textContent="❌";
    deleteBtn.addEventListener("click", ()=> {
        taskItem.remove();
        updateStats();
    });

    //Step 4: Add Elements
    taskContainer.appendChild(checkBox);
    taskContainer.appendChild(taskName);
    taskItem.appendChild(taskContainer);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    //Step 5: Refresh Input Box
    taskInput.value= "";

    //Step 6: Update Stats
    updateStats();
}
addBtn.addEventListener("click", addTask);
function updateStats() {
    const total= taskList.children.length;
    const completed= document.querySelectorAll(".check:checked").length;
    const pending=total-completed;
    totalCount.textContent= total;
    completedCount.textContent= completed;
    pendingCount.textContent= pending;
}