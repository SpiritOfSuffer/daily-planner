import React, { Component } from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem';
import { connect } from 'react-redux';
import styled from 'styled-components';


class App extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div className="App">
        <Header>Daily Planner</Header>
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

const Header = styled.h1`
  font-size = 30px;
`

export default connect(mapStateToProps, mapDispatchToProps)(App);
