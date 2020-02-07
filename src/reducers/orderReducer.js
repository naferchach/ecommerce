const orderReducer = (state, action) => {
  switch (action.type) {
    case 'PUSH_CART_PRODUCT':
      state.products = action.products;
      return state;
    case 'CHOOSE_PAYEMENT_METHOD':
      state.payement = action.payement;
      return state;
    case 'CHOOSE_DELIVERY_METHOD':
      state.delivery = action.delivery;
      return state;
    default:
      return state;
  }
};

export default orderReducer;
