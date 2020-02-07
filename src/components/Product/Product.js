import { useContext } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { CartContext } from '../../contexts/CartContext';

const styles = {
  productStyle: {
    width: '80%',
    margin: '0 auto',
    border: '1px solid #ddd',
    overflow: 'hidden'
  },
  productImg: {
    height: '300px',
    width: '40%',
    float: 'left'
  },
  productDetails: {
    height: '300px',
    width: '60%',
    padding: '10px',
    float: 'left'
  },
  buttonStyle: {
    border: '1px solid #333',
    color: '#333',
    borderRadius: '10px',
    padding: '5px 10px',
    backgroundColor: '#e7e7e7'
  }
};

const Product = ({ id, name, year, color, pantone_value }) => {
  const { dispatch } = useContext(CartContext);

  const addProduct = () => {
    dispatch({
      type: 'ADD_PRODUCT_CART',
      product: { id, name, color, ref: pantone_value, qte: 1 }
    });
  };

  return (
    <div style={styles.productStyle}>
      <Link href="/products/[id]" as={`/products/${id}`}>
        <a>
          <div
            style={Object.assign({}, styles.productImg, {
              backgroundColor: color
            })}
          ></div>
          <div style={styles.productDetails}>
            <strong>#{id} - </strong>
            <span>{pantone_value}</span>
            <p style={{ textTransform: 'capitalize' }}>{name}</p>
            <p>{year}</p>
            <div>
              <button
                type="button"
                style={styles.buttonStyle}
                onClick={addProduct}
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

Product.prototype = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  color: PropTypes.string,
  year: PropTypes.number,
  pantone_value: PropTypes.string
};

export default Product;
