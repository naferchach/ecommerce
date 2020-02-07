import PropTypes from 'prop-types';
const styles = {
  listStyle: { listStyle: 'none', textAlign: 'center' },
  itemStyle: { display: 'inline-block' },
  sepStyle: { margin: '0 20px' },
  itemActiveStyle: { display: 'inline-block', fontWeight: 'bold' }
};

const Steps = ({ step }) => {
  return (
    <ul style={styles.listStyle}>
      <li
        style={
          step == 'delivery' || step == null
            ? styles.itemActiveStyle
            : styles.itemStyle
        }
      >
        Mode de livraison <span style={styles.sepStyle}>-></span>
      </li>
      <li
        style={step == 'payement' ? styles.itemActiveStyle : styles.itemStyle}
      >
        Mode de paiement <span style={styles.sepStyle}>-></span>
      </li>
      <li style={step == 'summary' ? styles.itemActiveStyle : styles.itemStyle}>
        Récapitulatif
      </li>
    </ul>
  );
};

Steps.prototype = {
  step: PropTypes.string
};

export default Steps;
