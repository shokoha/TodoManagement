class Todo {
  static runningId = 1
  constructor(id = undefined, desc = 'N/A', done = false) {
    //call static member under non static function must be start with class name
    this.id = id ?? Todo.runningId++
    this.description = desc
    this.done = done
  }
  getTodo() {
    return { id: this.id, description: this.description }
  }
  setDescription(desc) {
    this.description = desc
  }

  setDone(done) {
    this.done = done
  }
}

export default Todo
