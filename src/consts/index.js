import { Record, List } from 'immutable';
import moment from 'moment';

export const ToDoRecord  = Record({
    title: '',
    description: '',
    priority: '',
    id: null,
});


export const StateRecord = Record({
    todos: List([new ToDoRecord({id: moment()})]),
    filter: null
  })

export const TYPE = {
      ADD_TODO: 'ADD TODO',
      DELETE_TODO: 'DELETE TODO',
      UPDATE_TODO: 'UPDATE TODO'
  }