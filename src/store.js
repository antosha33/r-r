import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';

const logMiddleware = (store) => (next) => (action) => {
  console.log(action.type);
  return next(action);
}

const stringMiddleware = (store) => (next) => (action) => {
  if (typeof action === 'string') {
    return next({
      type: action
    })
  }
  return next(action);
}

const thunk = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch);
  }
  return next(action)
}


const store = createStore(reducer, applyMiddleware(thunk, stringMiddleware, logMiddleware));

const delayedAction = (dispatch) => {
  setTimeout(() => dispatch({
    type: 'DELAYED_ACTION',
  }), 7000)
}

store.dispatch(delayedAction);



export default store;