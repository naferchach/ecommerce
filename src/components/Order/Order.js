import { useRouter } from 'next/router';
import Steps from './Steps';
import Delivery from './Delivery';
import Payment from './Payement';
import Summary from './Summary';

const Order = () => {
  const step = useRouter().query.step;
  return (
    <div>
      <Steps step={step} />

      {step === 'summary' ? (
        <Summary />
      ) : step === 'payement' ? (
        <Payment />
      ) : (
        <Delivery />
      )}
    </div>
  );
};

export default Order;
