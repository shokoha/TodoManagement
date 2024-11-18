## Todo class

#### properties

- id: unique id
- description: todo detail

#### methods

- getTodo(): returns {id, description} object
- setDescription(newDescription):

## TodoManagement

#### Todo Management function

- todos: stores all todo in array
- function addTodo(desc): adds a new todo to the end of todos array, returns the new length of the array
- function findTodo(searchId): returns a todo object that its id equals to searchId
- function findIndexTodo(searchId): returns an index of todo that its id equals to searchId
- functon removeTodo(removeId): removes a todo that its id equals to removeId
- function getTodos(): returns todos array
