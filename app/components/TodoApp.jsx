var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Make a todo list for the day'
        }, {
          id: 2,
          text: 'Mindfulness meditation'
        }, {
          id: 3,
          text: 'Work on Udemy courses'
        }, {
          id: 4,
          text: 'Lift weights and jog'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('New Todo: ' + text);
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
