import React, { createContext, useReducer } from 'react';
import cartReducer from '../reducers/cartReducer';
import PropTypes from 'prop-types';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartProducts, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cartProducts, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

CartContextProvider.propTypes = {
  children: PropTypes.node
};
