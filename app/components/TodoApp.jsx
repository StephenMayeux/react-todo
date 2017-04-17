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
          text: 'Make a todo list for the day'
        }, {
          id: uuid(),
          text: 'Mindfulness meditation'
        }, {
          id: uuid(),
          text: 'Work on Udemy courses'
        }, {
          id: uuid(),
          text: 'Lift weights and jog'
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
          text: text
        }
      ]
    });
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
      <TodoList todos={todos}/>
      <AddTodo onAddTodo={this.handleAddTodo}/>
    </div>
  )
}
});

module.exports = TodoApp;
