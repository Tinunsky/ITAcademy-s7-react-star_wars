import { NavLink } from "react-router-dom";
import logoImage from "../assets/star_wars_logo.svg";
import { LoginButton } from "./LoginButton";

export function Header() {
  return (
    <>
      <LoginButton />
      <header className="header">
        <div className="logo-container">
          <NavLink to="/">
            <img src={logoImage} alt="Star Wars Logo" className="logo-image" />
          </NavLink>
        </div>
      </header>
    </>
  );
}
