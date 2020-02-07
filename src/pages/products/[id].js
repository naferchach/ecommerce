import Layout from '../../components/Layout';
import Product from '../../components/Product';
import fetch from 'isomorphic-unfetch';

const ProductListPage = ({ product }) => {
  return (
    <Layout>
      <Product {...product} />
    </Layout>
  );
};

ProductListPage.getInitialProps = async function(context) {
  const { id } = context.query;

  const res = await fetch(` https://reqres.in/api/products/${id}`);
  const product = await res.json();

  return { product: product.data };
};

export default ProductListPage;
