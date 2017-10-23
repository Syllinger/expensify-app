import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';

const ExpenseListItem = ({id, description, amount, createdAt, dispatch}) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} -- {createdAt}</p>
    <button onClick={() => dispatch(removeExpense({id}))}>Remove</button>
  </div>
);

/* 
First function argument allows us to map state to props, but in this 
case we do not wish to map state. We use "connect" without supplying 
an argument to the first function to ensure that "dispatch" method 
from the store is added to props.
*/
export default connect()(ExpenseListItem);