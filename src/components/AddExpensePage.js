import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.onSubmit(expense);
    this.props.history.push('/');
  };

  render() {
    return (
        <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: expense => dispatch(addExpense(expense))
});

/* 
First function argument allows us to map state to props, but in this 
case we do not wish to map state. We use "connect" without supplying 
an argument to the first function to ensure that "dispatch" method 
from the store is added to props.
*/
export default connect(undefined, mapDispatchToProps)(AddExpensePage);