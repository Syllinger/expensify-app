import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
  const action = {type: 'REMOVE_EXPENSE', id: expenses[1].id};
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expenses if id is not found', () => {
  const action = {type: 'REMOVE_EXPENSE', id: '-1'};
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
  const expense = {testData: 'test'};
  const action = {type: 'ADD_EXPENSE', expense};
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('Should edit an expense', () => {
  const note = 'Test Note!';
  const action = {type: 'EDIT_EXPENSE', id: expenses[1].id, updates: {note}};
  const state = expensesReducer(expenses, action);
  expect(state[1].note).toBe(note);
});

test('Should not edit an expense if id is not found', () => {
  const note = 'Test Note!';
  const action = {type: 'EDIT_EXPENSE', id: '-1', updates: {note}};
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
