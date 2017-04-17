var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should call onToggle prop with id on click', () => {
    var todoData = {
      id: 199,
      text: 'Write todo.test.jsx test',
      completed: true
    };
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
    // pull out the element from the jQuery selector
    var $el = $(ReactDOM.findDOMNode(todo));
    // here we pull out the main div for our todo component (has onClick attribute)
    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(199);
  });
});
