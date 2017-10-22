import {createStore} from 'redux';

// Action generators: fucntions that return action objects
const incrementCount = (payload = {}) => ({
  type: 'INCREMENT',
  incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
});

/*
This function sets the initial state, and runs any time 
an action is triggered on the store.
*/
const store = createStore((state = { count:0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.incrementBy };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return { count: state.count - decrementBy };
    case 'RESET':
      return { count: 0 };
    case 'SET':
      return { count: action.count };
    default:
      return state;
  }
});

/* This function executes any time Redux detects that the state 
changes. Setting to this variable reutns a function that, when 
called, will stop this function from responding to future events.
*/
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Action: an object that gets sent to the store

// Increment
/*
When the dispatch method is called on the store, it causes the 
function declared when the store was created using createStore 
to execute, passing the object declared. When the createStore 
function is executed, this object is then passed into the second 
argument "action" and we use a switch statement to handle each 
"action type." "type" is the only required property on the object 
but an unlimited number of additional properties can be added to 
be handled by the funciton defined in "createStore."
*/
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

/*
We use an action generator instaed of passing the object in line 
becuase we are trying to avoid magic strings. If there wre an error 
in the hard-coded object, they would be tough to debug.
*/
store.dispatch(incrementCount({ incrementBy: 5 }));


store.dispatch(incrementCount());

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'SET',
  count: 101
});
