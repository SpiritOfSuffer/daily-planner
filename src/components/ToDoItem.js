import React, { Component } from 'react';
import { ToDoRecord } from '../consts'

class ToDoItem extends Component {
  render() {
    const {title, description, onClickAdd, onClickDelete, first, index } = this.props;
    return (
      <div>
          <input type="text" defaultValue={title} />
          <br />
          <input type="text" defaultValue={description} />
          <br />
          {first ? (
              <button onClick={() => onClickAdd(new ToDoRecord())}>Add</button>
          ) : (
            <button onClick={() => onClickDelete(index)}>Delete</button>
          )}
      </div>
    );
  }
}

export default ToDoItem;
