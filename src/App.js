import React, { Component } from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div className="App">
        {this._renderTodos(todos)}
      </div>
    );
  }
  _renderTodos(todos) {
    return (
    <ul>
      {todos.map((todo, index) => (
        <li key={todo.get('id')}>
          <ToDoItem index={index} />
        </li>
      ))}
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

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
