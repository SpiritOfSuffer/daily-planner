import React, { Component } from 'react';
import { TYPE } from '../consts'
import { connect } from 'react-redux';
import styled from 'styled-components'


class ToDoItem extends Component {
  render() {
    const {title, description, priority, index, addToDo, updateToDo, deleteToDo } = this.props;
    const first = index === 0;
    return (
      <div>
          <Title type="text" defaultValue={title} onChange={(e) => {
              updateToDo({
              index,
              value: e.target.value,
              field: 'title'
              })
            }} 
          />
          <br />
          <Description type="text" defaultValue={description} />
          <br />
          <Priority type="text" defaultValue={priority} />
          <br />
          {first ? (
              <Button onClick={addToDo}>Add</Button>
          ) : (
            <Button onClick={() => deleteToDo(index)}>Delete</Button>
          )}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
    return {
      title: state.getIn(['todos', ownProps.index, 'title']),
      description: state.getIn(['todos', ownProps.index, 'description']),
      priority: state.getIn(['todos', ownProps.index, 'priority'])
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      addToDo: (payload) => dispatch({
        type: TYPE.ADD_TODO,
        }),  
      updateToDo: (payload) => dispatch({
        type: TYPE.UPDATE_TODO,
        payload
        }),
      deleteToDo: (payload) => dispatch({
        type: TYPE.DELETE_TODO,
        payload
        }),
    }
  }

  
const Title = styled.input`
font-size: 24px;
border-left: none;
border-right: none;
border-top: none;
border-width: 2px;
outline: none;
`
const Description = styled.input`
font-size: 16px;
border-left: none;
border-right: none;
border-top: none;
border-width: 2px;
outline: none;
`
const Priority = styled.input`
font-size: 12px;
border-left: none;
border-right: none;
border-top: none;
border-width: 2px;
outline: none;
`
const Button = styled.button`
background-image: linear-gradient(to bottom, #14c296, #247c46);
border-radius: 100px;
font-family: "Segoe UI",Arial,sans-serif;
color: #ffffff;
padding: 10px 20px 24px 20px;
border: none;
cursor: pointer;
height: 40px;
font: "Segoe UI",Arial,sans-serif;
font-size: 13px;
font-weight: bold;
margin-top: 10px;
`

export default connect(mapStateToProps, mapDispatchToProps)(ToDoItem);
