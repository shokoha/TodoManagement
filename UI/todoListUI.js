const showTodoItem = (newId, newDescriptions) => {
    const todoList = document.getElementById('listTodo')
    const newDiv = document.createElement('div')
    newDiv.setAttribute('id',newId)
    newDiv.setAttribute('class', 'todoItem')
    
    const newP = document.createElement('p')
    newP.textContent = newDescriptions
    newDiv.appendChild(newP)

    const newButton = document.createElement('button')
    newButton.textContent = newDone ? 'done' : 'not done'
    newDiv.appendChild(newButton)

    const newButton2 = document.createElement('button')
    newButton2.textContent = 'Remove'
    newDiv.appendChild(newButton2)

    todoList.appendChild(newDiv)
}

const showNumberOfDone = (numberOfDone) => {
    const Done = document.getElementById('done')
    Done.textContent = `NumberOfDone = ${numberOfDone}`
}
const showNumberOfNotDone = (numberOfNotDone) => {
    const notDone = document.getElementById('notDone')
    notDone.textContent = `NumberOfNotDone = ${numberOfNotDone}`
}

export {showTodoItem,showNumberOfDone,showNumberOfNotDone}