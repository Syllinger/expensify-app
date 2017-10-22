import {createStore} from 'redux';

/*
This function sets the initial state, and runs any time 
an action is triggered on the store.
*/
const store = createStore((state = { count:0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
});

console.log(store.getState());

// Action: an object that gets sent to the store

// Increment
/*
When the dispatch method is called on the store, it causes the 
function declared when the store was created using createStore 
to execute, passing the object declared. When the createStore 
function is executed, this object is then passed into the second 
argument "action" and we use a switch statement to handle each 
"action type."
*/
store.dispatch({
  type: 'INCREMENT'
});

// Decrement
store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT'
});

console.log(store.getState());