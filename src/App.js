import React, { Component } from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem';
import { connect } from 'react-redux';
import { TYPE } from './consts/'

class App extends Component {
  render() {
    const { todos, addToDo, deleteToDo } = this.props;
    return (
      <div className="App">
        {this._renderTodos(todos, addToDo, deleteToDo)}
      </div>
    );
  }
  _renderTodos(todos, addToDo, deleteToDo) {
    return (
    <ul>
      {todos.map((todo, index) => 
        <li key={index}>
          <ToDoItem
            title = {todo.get('title')}
            description = {todo.get('description')}
            priority = {todo.get('priority')}
            onClickAdd={addToDo}
            onClickDelete={deleteToDo}
            first={index === 0}
            index={index}
          />
        </li>
      )}
    </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.get('todos'),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (payload) => dispatch({
      type: TYPE.ADD_TODO,
      payload
    }),
    deleteToDo: (payload) => dispatch({
      type: TYPE.DELETE_TODO,
      payload
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
