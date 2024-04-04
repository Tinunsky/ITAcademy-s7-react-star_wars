import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/starships" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Starships</NavLink>
        </li>
      </ul>
    </nav>
  );
}
