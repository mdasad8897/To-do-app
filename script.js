//accesing
const taskInput = document.getElementById("taskinput");
const addbtn = document.getElementById("addbtn")

const list = document.getElementById("tasklist");

//handlr

addbtn.addEventListener("click", () => {
    let task = taskInput.value.trim(); 
    
    //value check
    if(task !== "") { 
    let li = document.createElement("li")
    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginRight = "10px";

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            li.style.textDecoration = "line-through";
            li.style.color = "gray";
        } else {
            li.style.textDecoration = "none";
            li.style.color = "black"
        }
    });

    let delBtn = document.createElement("button");
    delBtn.innerText = "🗑️";
    delBtn.style.marginLeft = "auto";
    delBtn.style.border = "none";
    delBtn.style.backgroundColor = "transparent";
    delBtn.style.cursor ="pointer";
    delBtn.style.fontSize = "16px";
    delBtn.title = "delte Task";

     delBtn.addEventListener("click", () => {
        list.removeChild(li);
     });

     let taskText = document.createElement("span");
     taskText.innerText = task;

     li.style.display = "flex";
     li.style.alignItems = "center";
     li.style.justifyContent = "space-between";

     let leftSide = document.createElement("div");
     leftSide.style.display = "flex";
     leftSide.style.alignItems = "center";
     leftSide.appendChild(checkbox);
     leftSide.appendChild(taskText);

    li.appendChild(leftSide);
    li.appendChild(delBtn);

    list.appendChild(li);
    taskInput.value =""  //clear after value add
    }

})