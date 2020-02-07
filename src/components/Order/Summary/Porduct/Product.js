import PropTypes from 'prop-types';

const styles = {
  colorStyle: {
    display: 'inline-block',
    width: 20,
    height: 20,
    border: '1px solid #333',
    marginRight: '10px',
    position: 'relative',
    top: 3
  }
};

const Product = ({ id, name, color, ref, qte }) => {
  return (
    <div>
      <span
        style={Object.assign({}, styles.colorStyle, {
          backgroundColor: color
        })}
      ></span>
      <strong>#{id} - </strong>
      <span>{ref} </span>
      <span style={{ textTransform: 'capitalize' }}>{name} </span>
      <span>quantité : {qte} </span>
    </div>
  );
};

Product.prototype = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  color: PropTypes.string,
  ref: PropTypes.string,
  qte: PropTypes.number
};
export default Product;
