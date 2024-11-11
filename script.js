const input = document.querySelector(".input-box");
const btn = document.querySelector(".add-button");
const todolist=document.querySelector(".todo-list");
btn.addEventListener("click",addTodo);
todolist.addEventListener("click",deleteTodo)

function addTodo(event)
{
    event.preventDefault();
    // ctreate new tag dynamically
    const todoDiv=document.createElement("div");
    // crate class and add it to the tag
    todoDiv.classList.add("todo-container");
    

    

    const completebtn=document.createElement("button");
    completebtn.classList.add("complete-button");
// innerHTML will have single quetations('  ') and takes tags and text 
    completebtn.innerHTML='<i class="fa-regular fa-square-check"></i>'
    todoDiv.appendChild(completebtn);


    const todoitem = document.createElement("li");
    todoitem.classList.add("todo-item");
    // display the given text
    // innerText will have ("  ") double quets and consider input as string only
    todoitem.innerText=input.value;
    // console.log(input.value);
    todoDiv.appendChild(todoitem);

    const deletebtn=document.createElement("button");
    deletebtn.classList.add("delete-button");
    deletebtn.innerHTML='<i class="fa-solid fa-trash"></i>'
    todoDiv.appendChild(deletebtn);
    
   

    todolist.appendChild(todoDiv);
    input.value="";
}
function deleteTodo(event){
console.log(event.target);

const item=event.target;
console.log(item.classList);
if(item.classList[0]==="delete-button")
{
    const deleteItem=item.parentElement;
    console.log(deleteItem);
    deleteItem.remove();
    
}
if(item.classList[0]==="complete-button")
    {
        const deleteItem=item.parentElement;
        console.log(deleteItem);
         deleteItem.classList.toggle("completed");        
    }


}
