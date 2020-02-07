import PropTypes from 'prop-types';
const sidebarStyle = {
  border: '1px solid #DDD',
  width: '25%',
  float: 'left',
  padding: 20
};

{
  /* TODO: Filter By color */
}

const Sidebar = ({ allProducts }) => (
  <aside style={sidebarStyle}>
    <div>Filter by color:</div>
    <ul>
      {allProducts &&
        allProducts.map(product => <li key={product.id}>{product.color}</li>)}
    </ul>
  </aside>
);

Sidebar.prototype = {
  allProducts: PropTypes.array.isRequired
};

export default Sidebar;
