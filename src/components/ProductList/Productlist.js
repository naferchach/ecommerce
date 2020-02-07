import Sidebar from './Sidebar';
import Product from './Product';
import Pager from './Pager';
import PropTypes from 'prop-types';

const contentStyle = {
  width: '73%',
  padding: 20,
  float: 'right',
  border: '1px solid #ddd'
};

const ProductList = ({ products, totalPages, allProducts }) => (
  <section>
    <Sidebar allProducts={allProducts} />
    <section style={contentStyle}>
      {products &&
        products.map(product => (
          <div key={product.id}>
            <Product {...product} />
          </div>
        ))}
      <Pager totalPages={totalPages} />
    </section>
  </section>
);

ProductList.prototype = {
  totalPages: PropTypes.number.isRequired,
  products: PropTypes.array.isRequired,
  allProducts: PropTypes.array.isRequired
};

export default ProductList;
