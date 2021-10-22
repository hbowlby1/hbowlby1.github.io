 import ls from './ls.js';
 import utilities from './domEditor.js';
 
 // holds tasks
 let todoList = null;
 
 // dom selectors
 const taskCbDOMSelector = '.task-cb';
 const taskDeleteDOMSelector = '.task-delete';
 const taskCounterDOMSelector = '#todoCounter';
 
 
// main todo class
 class Todos{
 
   // Instantiates the element, including listing its contents
   constructor(lsKey, elementDOM){
     this.lsKey = lsKey;
     this.element = utilities.qs(elementDOM);
     this.listTodos();
   }
 
    addTodo() {
     let taskContent = utilities.qs('#newTodo')
     if (taskContent.value != '') {
       saveTodo(this.lsKey, taskContent.value);
       this.listTodos();
     }
     taskContent.value = '';
   }
 
    listTodos(){
     renderTodoList(filterList(getTodos(this.lsKey)), this.element);
     this.addCompleteListeners();
     this.addDeleteListeners();
     this.updateTasksLeft();
   }
 
   completeTodo(id) {
     toggleCompleted(this.lsKey, id);
     this.listTodos();
   }
 
   // removes todos
   deleteTodo(id) {
     deleteTask(this.lsKey, id);
     this.listTodos();
   }
 

   addCompleteListeners() {
     let cbs = utilities.qs(taskCbDOMSelector);
     if (cbs != null) {
       // Add element to a list if is just one element
       if (cbs.length == undefined) {
         let item = cbs;
         cbs = []
         cbs.push(item);
       }
       [...cbs].forEach(element => {
       utilities.onTouch(element, () => { this.completeTodo(element.parentElement.id) });
     });
     }
   }
 
   addDeleteListeners() {
     let remove = utilities.qs(taskDeleteDOMSelector);
     if (remove != null) {
       // Add element to a list if is just one element
       if (remove.length == undefined) {
         let item = remove;
         remove = []
         remove.push(item);
       }
       [...remove].forEach(element => {
       utilities.onTouch(element, () => { this.deleteTodo(element.parentElement.id) });
     });
     }
   }
 
   updateTasksLeft() {
     let count = 0
     if (todoList != null) {
        count = todoList.filter(element => { return element.completed == false }).length 
     }
     utilities.qs(taskCounterDOMSelector).innerText = count;
   }
 }
 
 function saveTodo(key, textContent){
   let task = {id: Date.now(), content: textContent, completed: false}
   todoList.unshift(task);
   ls.write(key, todoList);
 }
 

 function changeTask(key, id, todo) {
   let todoList = getTodos(key);
   if (todoList != null) {
     todoList[id] = todo;
     ls.write(key, todoList);
     return true;
   }
   return false;
 }
 
 function deleteTask(key, id) {
   let todoList = getTodos(key);
   let index = todoList.findIndex(element => element.id == id);
   if (todoList != null) {
     todoList.splice(index, 1);
     ls.write(key, todoList);
     return true;
   }
   return false;
 }

 function getTodos(key){
   if (todoList == null){
     if(ls.read(key) == null)
       todoList = [];
     else
       todoList = ls.read(key);
   }
   return todoList;
 }

 
 function renderTodoList(list, elementDOM) {
   if (list !== null) {
     // Empty content of the element to start from scratch
     elementDOM.innerHTML = '';
     list.forEach((element, index) => {
       let item = document.createElement('li');
       // Add the task id as the html element id for reference
       item.id = element.id;
       item.classList.add("task");
       item.innerHTML = `
             <input type="checkbox" name="completed" class="task-cb">
             <div class="task-text" name="text">${element.content}</div>
             <i name="delete" class="fa fa-trash-o task-delete" aria-hidden="true" id=${index}></i>   
       `;
       // update the checkbox status based on the todo list status
       item.children["completed"].checked = element.completed;
 
       // change text class to completed to style it
       if (element.completed) {
         item.children["text"].classList.add("completed");     
       }
       elementDOM.append(item);
     });
   }
 }
 

 function toggleCompleted(key, id) {
   
   let item = getTodos(key).find(element => element.id == id);
   if (item != null) {
       item.completed = !item.completed
       changeTask(key, id, item);
     }
 }
 
 function filterList(list) {
 
   let filter = utilities.qs(".activeFilter").id;
   let filteredList = list;
 
   // Used a switch statement to leave the structure of other filters
   switch (filter) {
     case "taskCompleted":
       filteredList = list.filter(element => {
         return element.completed == true;
       });
       break;
     case "taskActive":
       filteredList = list.filter(element => {
         return element.completed == false;
       });
       break;
   }
   return filteredList;
 }
 
 export default Todos;