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
  }
};
