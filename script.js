let todoUl = document.getElementById('todoUl');
let addBtn = document.getElementById('addTodo');
let todoItem = document.getElementById('todoItem');



let showTodo = (event) =>{
    event.preventDefault();
    let todoInput = document.getElementById('todoInput').value;
    // let liElem = document.getElementById("todoItem");
    // let todoList =  document.createElement('li');
    // todoList.innerHTML = todoInput;
    // todoUl.appendChild(todoList);
    todoUl.innerHTML += `<li>${todoInput}</li>`

    todoList.style.padding = '10px';
    todoList.style.fontWeight = '500';
    todoUl.style.border = '1px solid grey';
    
     todoInput = document.getElementById('todoInput').value = '';
    
    return;
}







// todoItem.textContent = todoInput;
// todoUl.appendChild(todoItem);
// return;