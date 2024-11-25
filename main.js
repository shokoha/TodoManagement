import {addTodoHandler} from './eventHandler/eventController.js'

const addbtn = document.getElementById('addBtn')
addbtn.addEventListener('click',addTodoHandler)