import { useContext } from 'react';
import Product from './Porduct';
import { CartContext } from '../../contexts/CartContext';
import { OrderContext } from '../../contexts/OrderContext';
import Router from 'next/router';

const styles = {
  listStyle: { borderTop: '1px solid #333', listStyle: 'none' },
  itemStyle: { borderBottom: '1px solid #ddd', padding: '20px 0 20px 10px' }
};

const Cart = () => {
  const { cartProducts } = useContext(CartContext);
  const { dispatch } = useContext(OrderContext);

  const pushCartToOrderProduct = () => {
    dispatch({ type: 'PUSH_CART_PRODUCT', products: cartProducts });
    Router.push({
      pathname: '/order'
    });
  };

  return (
    <>
      <h2>Produis du panier : </h2>
      <ul style={styles.listStyle}>
        {cartProducts.map(product => (
          <li key={product.id} style={styles.itemStyle}>
            <Product {...product} />
          </li>
        ))}
      </ul>
      <div>
        <button type="button" onClick={pushCartToOrderProduct}>
          Commander
        </button>
      </div>
    </>
  );
};

export default Cart;
