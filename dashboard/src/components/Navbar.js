import { NavLink } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className="flex-15">
      <ul>
        <li>
          <NavLink activeClassName="active" to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/articles">
            Articles
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/books">
            Books
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/people">
            People
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/help">
            Help and Support
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
