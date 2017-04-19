var $ = require('jQuery');

module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos)); // JSON.stringify is built into JavaScript. localStorage can't store objects or arrays so we need to convert data into strings
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos); // not sure I understand this part. Research this
    } catch (e) {

    }

    return $.isArray(todos) ? todos : []; // if the statement is true then code after ? is returned. If false, then code after : is returned
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => { // calls a given callback function once for each item. Function must return true for item to be kept in the array (filters out items returning false)
      return !todo.completed || showCompleted; // If one of these is true then item will be shown. If showCompleted is checked then all items will be shown. Otherwise, only incomplete items will be shown by default
    });
    // filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });
    // sort todos with incomplete todos listed first
    filteredTodos.sort((a, b) => { // a and b are both todos which we are comparing to decide the order
      if (!a.completed && b.completed) { // if a.completed === false and b.completed is === true then ...
        return -1; // returning -1 sorts a before b
      } else if (a.completed && !b.completed) {
        return 1; // returning 1 sorts b before a
      } else {
        return 0; // returning 0 leaves the current order alone. No sorting is done
      }
    });

    return filteredTodos;
  }
};
