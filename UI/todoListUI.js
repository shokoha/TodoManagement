function showTodoItem(newId, newDescriptions) {
    const todoList = document.querySelector('#listTodo')

    const divTodoItem = document.createElement('div') 

    divTodoItem.setAttribute('id', newId)
    divTodoItem.setAttribute('class', 'todoItem')
    
    const pTodoItem = document.createElement('p')
    pTodoItem.textContent = newDescriptions
    
    const statusTodoItem = document.createElement('button')
    
    statusTodoItem.textContent = "Not Done" 
   
    const removeTodoItem = document.createElement('button')
    removeTodoItem.textContent = 'Remove'

    divTodoItem.appendChild(pTodoItem)
    divTodoItem.appendChild(statusTodoItem)
    divTodoItem.appendChild(removeTodoItem)

    todoList.appendChild(divTodoItem)
}

function showNumberOfDone(NumberOfDone) {
    const done = document.querySelector('#done')
    done.textContent = `Number of Done:${NumberOfDone}`
}

function showNumberOfNotDone(NumberOfNotDone) {
    const notdone = document.querySelector('#notDone')
    notdone.textContent = `Number of Not Done:${NumberOfNotDone}`
}
function removeTodoList(removeId) {
    const todoItem = document.getElementById(removeId)
    //* หรือเขียนแบบนี้
    // const todo = document.getElementById(removeId);
    todoItem.remove();
    
}

export { showTodoItem, showNumberOfDone, showNumberOfNotDone,removeTodoList }

