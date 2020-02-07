import PropTypes from 'prop-types';
import Header from '../Header';

const layoutStyle = {};

const Layout = ({ children }) => (
  <div style={layoutStyle}>
    <Header />
    {children}
  </div>
);

Layout.prototype = {
  children: PropTypes.node
};
export default Layout;
