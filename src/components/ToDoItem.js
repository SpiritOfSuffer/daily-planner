import React, { Component } from 'react';
import { TYPE } from '../consts'
import { connect } from 'react-redux';

class ToDoItem extends Component {
  render() {
    const {title, description, priority, index, addToDo, updateToDo, deleteToDo } = this.props;
    const first = index === 0;
    return (
      <div>
          <input type="text" defaultValue={title} onChange={(e) => {
              updateToDo({
              index,
              value: e.target.value,
              field: 'title'
              })
            }} 
          />
          <br />
          <input type="text" defaultValue={description} />
          <br />
          <input type="text" defaultValue={priority} />
          <br />
          {first ? (
              <button onClick={addToDo}>Add</button>
          ) : (
            <button onClick={() => deleteToDo(index)}>Delete</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ToDoItem);
