import { render, screen } from '@testing-library/react';
import Budget from "../dynamic/Budget"
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { budgetReducer } from '../../reducers/budgetReducer';
import thunk from 'redux-thunk';


const BudgetWrapper = () => {
    const store = createStore(budgetReducer, composeWithDevTools(applyMiddleware(thunk)))
  
    return (
      <Provider store={store}> // Set context
        <Budget /> // Now App has access to context
      </Provider>
    )
  }

test('renders learn react link', () => {
  render(<BudgetWrapper/>);
  const button = screen.getByRole("button", { name: "+ New Expense"});
  expect(button).toBeInTheDocument();
});

// test('renders learn react link', () => {
//   render(<BudgetWrapper/>);
//   const button = screen.getByRole("button", { name: "+ New Expense"});
//   expect(button).toBeInTheDocument();
// });