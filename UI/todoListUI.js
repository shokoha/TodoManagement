const showTodoItem = (newId, newDescriptions) => {
    const todLost = document.getElementById('listTodo')
    const newDiv = document.createElement('div')
    newDiv.setAttribute('id',newId)
    newDiv.setAttribute('class', 'todoItem')
    
    const newP = document.createElement('p')
    newP.textContent = newDescriptions
    newDiv.appendChild(newP)
    
    const newButton = document.createElement('button')
}