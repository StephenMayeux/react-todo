var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    var todos = [{
        id: 1,
        text: 'Power through Udemy courses'
      }, {
        id: 2,
        text: '30 minutes each for lifting and cardio'
      }];
      // We're passing the {todos} data we created above as the value for the todos prop for the TodoList component
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    // Below we have an instance of the todoList, which we are searching in, passed in as the first parameter
    // and the component we want to find and count
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });
});
