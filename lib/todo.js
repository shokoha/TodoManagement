class Todo {
  static runningId = 1
  constructor(desc = 'N/A') {
    //call static member under non static function must be start with class name
    this.id = Todo.runningId++
    this.description = desc
  }
  getTodo() {
    return { id: this.id, description: this.description }
  }
  setDescription(desc) {
    this.description = desc
  }
}

module.exports = Todo
