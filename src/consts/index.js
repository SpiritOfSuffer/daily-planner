import { Record, List } from 'immutable';

export const ToDoRecord  = Record({
    title: '1',
    description: '',
    deadline: '',
    priority: '',
    completed: ''
});


export const StateRecord = Record({
    todos: List([new ToDoRecord()]),
    filter: null
  })

export const TYPE = {
      ADD_TODO: 'ADD TODO',
      DELETE_TODO: 'DELETE TODO'
  }