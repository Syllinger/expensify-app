import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    /*
    Was tripped up here because method signature suggests that 
    the editExpense action requires an id, and an updates object. 
    Was looking at how to access id being passed up by ExpenseForm, 
    but "id" is already boudn to the component props variable, as we 
    mapped it when we called the "connect" method with "mapStateToProps" 
    where "props.expense" is assigned to the result of the expense 
    entry found in in the array.
    */
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onClick = () => {
    this.props.removeExpense({id: this.props.expense.id});
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <ExpenseForm 
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button 
          onClick={this.onClick}
        >Remove</button>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => {
  return { 
    expense: state.expenses.find(expense => expense.id === props.match.params.id) 
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: data => dispatch(removeExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);