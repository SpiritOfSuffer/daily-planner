import { TYPE } from '../consts/'

export function reducer(state, action) {
    switch(action.type) {
        case TYPE.ADD_TODO:
            return state.update('todos', todos => todos.insert(0, action.payload))
        case TYPE.DELETE_TODO:
            return state.update('todos', todos => todos.remove(action.payload))
        default:
             return state
    }
    
}

export default reducer;