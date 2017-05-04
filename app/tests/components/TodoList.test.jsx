var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    var todos = [{
        id: 1,
        text: 'Power through Udemy courses',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      }, {
        id: 2,
        text: '30 minutes each for lifting and cardio',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      }];
      
    var store = configure({
        todos
    });
      var provider = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <ConnectedTodoList/>
        </Provider>
      );
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render an empty message if no todos', () => {
    var todos = [];
      // We're passing the {todos} data we created above as the value for the todos prop for the TodoList component
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    // Below we have an instance of the todoList, which we are searching in, passed in as the first parameter
    // and the component we want to find and count
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
