var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos() // retrieves an array of todos from local storage (when the page first loads)
    };
  },
  componentDidUpdate: function () { // this lifecycle method is called when the component has the props or state updated
    TodoAPI.setTodos(this.state.todos); // setTodos is called with the result of: todos: TodoAPI.getTodos();
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
  var {todos, showCompleted, searchText} = this.state;
  var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

  return (
    <div>
      <TodoSearch onSearch={this.handleSearch}/>
      <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
      <AddTodo onAddTodo={this.handleAddTodo}/>
    </div>
  )
}
});

module.exports = TodoApp;
