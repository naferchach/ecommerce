import React, { createContext, useReducer } from 'react';
import orderReducer from '../reducers/orderReducer';
import PropTypes from 'prop-types';

export const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {
  const [orderDetails, dispatch] = useReducer(orderReducer, {
    delivery: '',
    payement: '',
    products: []
  });

  return (
    <OrderContext.Provider value={{ orderDetails, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

OrderContextProvider.propTypes = {
  children: PropTypes.node
};
