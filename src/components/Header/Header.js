import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Link from 'next/link';

const headerStyle = {
  border: '1px solid #ddd',
  width: '100%',
  margin: '0 0 30px',
  padding: '20px'
};
const linkStyle = {
  marginRight: 15
};

const Header = () => {
  const { cartProducts } = useContext(CartContext);

  const getQte = () => {
    let qte = 0;
    for (let i = 0; i < cartProducts.length; i++) {
      qte += cartProducts[i].qte;
    }
    return qte;
  };

  return (
    <header style={headerStyle}>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/productlist">
        <a style={linkStyle}>Liste produits</a>
      </Link>
      <Link href="/cart">
        <a style={linkStyle} style={{ float: 'right' }}>
          Panier ({getQte()})
        </a>
      </Link>
    </header>
  );
};

export default Header;
