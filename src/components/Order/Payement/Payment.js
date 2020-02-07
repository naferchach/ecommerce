import { useState, useContext } from 'react';
import Router from 'next/router';
import { OrderContext } from '../../../contexts/OrderContext';
const styles = {
  payementStyle: {
    width: '50%',
    margin: '100px auto'
  }
};

const payement = () => {
  const { dispatch } = useContext(OrderContext);
  const [payement, setPayement] = useState('visa');

  const goToNextStep = () => {
    dispatch({ type: 'CHOOSE_PAYEMENT_METHOD', payement });
    Router.push({
      pathname: '/order',
      query: { step: 'summary' }
    });
  };

  const goToPrevStep = () => {
    Router.push({
      pathname: '/order',
      query: { step: 'delivery' }
    });
  };

  return (
    <div style={styles.payementStyle}>
      <div>
        <label>
          <input
            type="radio"
            name="payement"
            value="visa"
            onClick={() => setPayement('visa')}
            checked={payement === 'visa'}
          />
          Visa
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="payement"
            value="paypal"
            onClick={() => setPayement('paypal')}
            checked={payement === 'paypal'}
          />
          Paypal
        </label>
      </div>
      <button type="button" onClick={goToPrevStep}>
        prev
      </button>
      <button type="button" onClick={goToNextStep}>
        next
      </button>
    </div>
  );
};
export default payement;
