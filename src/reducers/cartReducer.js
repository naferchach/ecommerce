const _ = require('lodash');

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_CART':
      if (_.includes(...state, action.product.id)) {
        let index = _.findIndex(state, function(p) {
          return p.id == action.product.id;
        });
        state[index] = {
          id: action.product.id,
          name: action.product.name,
          color: action.product.color,
          ref: action.product.pantone_value,
          qte: state[index].qte + 1
        };
        return state;
      } else {
        return [
          ...state,
          {
            id: action.product.id,
            name: action.product.name,
            color: action.product.color,
            ref: action.product.pantone_value,
            qte: action.product.qte
          }
        ];
      }
    case 'REMOVE_PRODUCT_CART':
      return state.filter(product => product.id !== action.id);
    default:
      return state;
  }
};

export default cartReducer;
