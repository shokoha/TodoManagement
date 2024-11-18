
import todoManagement from './lib/TodoManagement'
import { showTodoItem, showNumberOfDone, showNumberOfNotDone } from './UI/todoListUI'

const initEvent = () => {
    const addBtr = document.querySelector('#addBtn')
    const addInput = document.querySelector('#addTodo input')

    addBtr.addEventListener('click', () => {
        if (addInput.value.trim().length = 0) {
            
        }
    })
}

const todoManager = todoManagement()
const todoId1 = todoManager.addTodo()
showTodoItem(todoId1, 'test')
showNumberOfDone(todoManager)
showNumberOfNotDone(todoManager.showNumberOfNotDone())