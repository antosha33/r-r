import React from 'react';
import { BookStoreServiceConsumer } from '../context';

const WithBookStoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <BookStoreServiceConsumer>
        {
          (service) => {
            return <Wrapped {...props} service={service}></Wrapped>
          }
        }
      </BookStoreServiceConsumer>
    )
  }
}

export default WithBookStoreService;