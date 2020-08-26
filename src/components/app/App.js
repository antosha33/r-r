import React, { useEffect, useCallback } from 'react';
import WithBookStoreService from '../hoc'
import { connect } from 'react-redux';
import { bookLoaded } from '../../actions';
import  {Route, Switch} from 'react-router-dom';
import {HomePage, CartPage} from '../pages';

const App = ({ service, bookLoaded, books }) => {

  return (
    <Switch>
      <Route path='/' component={HomePage} exact></Route>
      <Route path='/cart' component={CartPage} ></Route>
    </Switch>
  )
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    bookLoaded: (books) => dispatch(bookLoaded(books))
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(WithBookStoreService()(App));