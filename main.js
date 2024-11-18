import Todo from './lib/todo'
import todoManagement from './lib/TodoManagement'
import { showTodoItem, showNumberOfDone, showNumberOfNotDone } from './UI/todoListUI'

const todoManager = todoManagement()
const todoId1 = todoManager.addTodo()
showTodoItem(todoId1, 'test')
showNumberOfDone(todoManager.getNumberOfDone())
showNumberOfNotDone(todoManager.showNumberOfNotDone())