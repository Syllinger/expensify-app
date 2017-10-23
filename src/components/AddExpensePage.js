import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/');
      }}
    />
  </div>
);

/* 
First function argument allows us to map state to props, but in this 
case we do not wish to map state. We use "connect" without supplying 
an argument to the first function to ensure that "dispatch" method 
from the store is added to props.
*/
export default connect()(AddExpensePage);