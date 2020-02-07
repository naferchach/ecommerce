import { useState, useContext } from 'react';
import Router from 'next/router';
import { OrderContext } from '../../../contexts/OrderContext';
const styles = {
  deliveryStyle: {
    width: '50%',
    margin: '100px auto'
  }
};

const Delivery = () => {
  const { dispatch, orderDetails } = useContext(OrderContext);
  const [delivery, setDelivery] = useState('normal');

  const goToNextStep = () => {
    dispatch({ type: 'CHOOSE_DELIVERY_METHOD', delivery });
    Router.push({
      pathname: '/order',
      query: { step: 'payement' }
    });
  };

  return (
    <div style={styles.deliveryStyle}>
      <div>
        <label>
          <input
            type="radio"
            name="delivery"
            value="normal"
            onClick={() => setDelivery('normal')}
            checked={delivery === 'normal'}
          />
          Normal
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="delivery"
            value="express"
            onClick={() => setDelivery('express')}
            checked={delivery === 'express'}
          />
          Express
        </label>
      </div>

      <button type="button" onClick={goToNextStep}>
        next
      </button>
    </div>
  );
};

export default Delivery;
