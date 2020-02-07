import { useContext } from 'react';
import { OrderContext } from '../../../contexts/OrderContext';
import Product from './Porduct';
const Summary = () => {
  const { orderDetails } = useContext(OrderContext);
  return (
    <div>
      <h2>Summary</h2>
      <p>Mode de livraison : {orderDetails.delivery} </p>
      <p>Mode de paiement : {orderDetails.payement}</p>
      <ul>
        {orderDetails.products.map(product => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Summary;
