 import Todos from './list.js'
 import utilities from './domEditor.js';
 
 // Initializes the app providing a name to save the list to and the 
 // item id to display the results
 let app = new Todos("ALBA_ROD_TODO", '#todoBoard');
 let addButton = utilities.qs('#addButton');
 
 // Adds and event listener to create a new task
 utilities.onTouch(addButton, function () { app.addTodo(); });
 
 // Referencing the filters
 let filters = utilities.qs(".filter");
 
 // Attachs a listener to each label, changes the class accordingly
 [...filters].forEach(element => {
   let id = element.id;
   utilities.onTouch(utilities.qs("#" + id), (event) => {
     
     // Change the filter class, remove for all others
     filters.forEach(element => {
       if (event.target.id != element.id) {
         element.classList.remove("activeFilter");
       }
       else {
         element.classList.add("activeFilter");
       }
     });
     
     // Updates the view to display all tasks
     app.listTodos();
 
   });
 });