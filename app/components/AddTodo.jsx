var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value; // pull the value from the ref and store it in a new variable todoText

    if(todoText.length > 0) {
      this.refs.todoText.value = ''; // here we emptied the value for the ref so the user can type another input
      this.props.onAddTodo(todoText); // here we pass in the user's input to the onAddTodo function which comes from the parent component
    } else {
      this.refs.todoText.focus(); // here we bring the cursor's focus back to the input field so the user can type something else
    }
  }, // render value is a function that returns some jsx to be rendered
  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
