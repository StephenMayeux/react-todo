var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
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
  render: function () {
  var {todos} = this.state;

  return (
    <div>
      <TodoList todos={todos}/>
      <AddTodo onAddTodo={this.handleAddTodo}/>
    </div>
  )
}
});

module.exports = TodoApp;
