import { NavLink, Link } from 'react-router-dom';

function NavTest() {
  return (
    <div>
      <Link
        to = '/'
        >
        Home
        </Link>
      <Link
        to = '/shop'
        >
        Shop
        </Link>
        </div>

  )
}

export default NavTest;
