var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';

export var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }
      return todos.map((todo) => {
        return ( // Here we return some jsx. A Todo component for each list item
          // The key is required by React for keeping track of instances of a component
          <Todo key={todo.id} {...todo}/> // ... pulls out the keys/properties of the todo object (id and text)
        );
      });
    };

    return (
      <div>
      {renderTodos()}
      </div>
    )
  }
});

export default connect(
    (state) => {
        return {
          todos: state.todos  
        };
    }
)(TodoList);
