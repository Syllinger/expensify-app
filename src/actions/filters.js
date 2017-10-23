// Filter Action Generators

// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SET_START_DATE
/* 
Don't need to explicitly set undefined as a default 
value for date in this case, as "undefined" is the 
default value when no arguments are supplied to a 
parameter.
*/
export const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date
});

// SET_END_DATE
export const setEndDate = (date = undefined) => ({
  type: 'SET_END_DATE',
  date
});