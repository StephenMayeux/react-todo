var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Make a todo list for the day',
          completed: false
        }, {
          id: uuid(),
          text: 'Mindfulness meditation',
          completed: true
        }, {
          id: uuid(),
          text: 'Work on Udemy courses',
          completed: true
        }, {
          id: uuid(),
          text: 'Lift weights and jog',
          completed: false
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    });
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;  // neat way to toggle the true/false value
      }
      return todo;
    });

    this.setState({todos: updatedTodos}); // now update state with new updatedTodos array that we created
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
  var {todos} = this.state;

  return (
    <div>
      <TodoSearch onSearch={this.handleSearch}/>
      <TodoList todos={todos} onToggle={this.handleToggle}/>
      <AddTodo onAddTodo={this.handleAddTodo}/>
    </div>
  )
}
});

module.exports = TodoApp;
