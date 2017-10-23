import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm 
        expense={props.expense}
        onSubmit={expense => {
          /*
          Was tripped up here because method signature suggests that 
          the editExpense action requires an id, and an updates object. 
          Was looking at how to access id being passed up by ExpenseForm, 
          but "id" is already boudn to the component props variable, as we 
          mapped it when we called the "connect" method with "mapStateToProps" 
          where "props.expense" is assigned to the result of the expense 
          entry found in in the array.
          */
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}
      />
      <button 
        onClick={() => {
          props.dispatch(removeExpense({id: props.expense.id}));
          props.history.push('/');
        }}
      >Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return { 
    expense: state.expenses.find(expense => expense.id === props.match.params.id) 
  };
};

export default connect(mapStateToProps)(EditExpensePage);