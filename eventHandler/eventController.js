import { todoManagement } from "../lib/TodoManagement.js"
import { removeTodoList,showNumberOfDone , showNumberOfNotDone ,showTodoItem } from "../UI/todoListUI.js"

    const todoManager = todoManagement()
    const refreshTodoList = () => {
        showNumberOfDone(todoManager.getNumberOfDone())
        showNumberOfNotDone(todoManager.getNumberOfNotDone())
    }



    function addTodoHandler() {
        const inputTodo = document.querySelector('#addTodo input ')
        if (inputTodo.value.trim().length > 0) {
            const todoId = todoManager.addTodo(undefined, inputTodo.value, false)
            showTodoItem(todoId, todoManager.findTodo(todoId).description)
            const todoDiv = document.getElementById(todoId)
            const btnArray = todoDiv.querySelectorAll('button')
            btnArray[0].addEventListener('click', notDoneButtonHandler)
            btnArray[1].addEventListener('click', removeDoneButtonHandler)
            refreshTodoList()
        }
    }

    function notDoneButtonHandler(event) {
        const doneClick = event.target
        doneClick.style = 'background-color: green; color:white'
        doneClick.textContent = "done"
        todoManager.setItemToDone(Number(doneClick.parentElement.getAttribute('id')))
        refreshTodoList()
    }

function removeDoneButtonHandler(event) { 
    const removeClick = event.target
    const removeId = Number(removeClick.parentElement.getAttribute('id'))
    removeTodoList(removeId)
    todoManager.removeTodo(removeId)
    refreshTodoList()
}

export {addTodoHandler}