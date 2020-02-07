import { range } from '../../../utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const styles = {
  listStyle: {
    width: '100%',
    textAlign: 'center',
    clear: 'both',
    listStyle: 'none'
  },
  itemStyle: {
    display: 'inline-block',
    margin: '0 5px'
  },
  linkStyle: {
    display: 'block'
  },
  linkActiveStyle: {
    display: 'block',
    textDecoration: 'underline',
    fontWeight: 'bold'
  }
};

const Pager = ({ totalPages }) => {
  const rangePager = range(1, totalPages);
  const activeParam = useRouter().query.page || 1; //--> if page param is null we affect 1
  return (
    <div>
      <ul style={styles.listStyle}>
        {rangePager.map(p => (
          <li key={p} style={styles.itemStyle}>
            <Link href={`?page=${p}&per_page=6`}>
              <a
                style={
                  p == activeParam ? styles.linkActiveStyle : styles.linkStyle
                }
              >
                {p}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Pager.prototype = {
  totalPages: PropTypes.number.isRequired
};

export default Pager;
