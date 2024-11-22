import Todo from './todo.js'

function todoManagement() {
  const todos = []
  function addTodo(id,desc,done) {
    return todos.push(new Todo(id, desc, done))
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

