function loadTodos(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => displayTodos(data))
}
function displayTodos(todos){
    //Get the container
    const todoContainer = document.getElementById("todo-container");
    for(const todo of todos){
        
        //Create the element
        const div = document.createElement('div');
        div.innerHTML = `
        <h4>User ID- ${todo.id}</h4>
        <h3>Title- ${todo.title}</h3>
        <p>Completed: ${todo.completed === true ? 'Complete' : 'Not Complete'}<p>
        `;
        todoContainer.appendChild(div);
    }
}
loadTodos();