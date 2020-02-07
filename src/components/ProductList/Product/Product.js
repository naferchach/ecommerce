import PropTypes from 'prop-types';
import Link from 'next/link';

const styles = {
  productStyle: {
    width: '30%',
    float: 'left',
    border: '1px solid #ddd',
    margin: '0 1% 20px 0'
  },
  productImg: {
    height: '100px'
  },
  productDetails: {
    padding: '10px'
  }
};

const Product = ({ id, name, year, color, pantone_value }) => (
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
        </div>
      </a>
    </Link>
  </div>
);

Product.prototype = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  color: PropTypes.string,
  year: PropTypes.number,
  pantone_value: PropTypes.string
};

export default Product;
