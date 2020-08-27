import React from 'react';
import Context from '../context';

const WithBookStoreService = (Wrapped) => {
  return (props) => {
    return (
      <Context.Consumer>
        {
          (service) => {
            return <Wrapped {...props} service={service}></Wrapped>
          }
        }
      </Context.Consumer>
    )
  }
}


export default WithBookStoreService;