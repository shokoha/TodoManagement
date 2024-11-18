const Todo = require('./todo.js')
function todoManagement() {
  const todos = []
  function addTodo(id,desc,done) {
    return todos.push(new Todo(desc))
  }
  function findTodo(searchId) {
    return todos.find((todo) => todo.id === searchId)
  }
  function findIndexTodo(searchId) {
    return todos.findIndex((todo) => todo.id === searchId)
  }
  function removeTodo(removeId) {
    const foundIndex = findIndexTodo(removeId)
    todos.splice(foundIndex, 1)
  }
  function getTodos() {
    return todos
  }
  return { addTodo, findTodo, removeTodo, getTodos }
}
const tdm = todoManagement()
console.log(tdm.addTodo('Shopping'))
console.log(tdm.addTodo('Reading'))
console.log(tdm.addTodo('Swimming'))
console.log(tdm.getTodos())
console.log(tdm.findTodo(1))
console.log(tdm.findTodo(2))
tdm.removeTodo(2)
console.log(tdm.getTodos())
