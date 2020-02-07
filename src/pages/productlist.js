import Layout from '../components/Layout';
import ProductList from '../components/ProductList';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';

const ProductListPage = ({ products, totalPages, allProducts }) => {
  return (
    <Layout>
      <ProductList
        products={products}
        totalPages={totalPages}
        allProducts={allProducts}
      />
    </Layout>
  );
};

ProductListPage.getInitialProps = async function({
  query: { page = 1, per_page = 6 }
}) {
  const res = await fetch(
    `https://reqres.in/api/products?page=${page}&per_page=${per_page}`
  );
  const data = await res.json();

  const resAllProducts = await fetch(
    `https://reqres.in/api/products?page=1&per_page=12`
  );
  const dataAllProducts = await resAllProducts.json();

  return {
    totalPages: data.total_pages,
    products: data.data,
    allProducts: dataAllProducts.data
  };
};

ProductListPage.prototype = {
  products: PropTypes.array,
  allProducts: PropTypes.array,
  totalPages: PropTypes.number
};

export default ProductListPage;
