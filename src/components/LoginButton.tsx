import { NavLink } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export function LoginButton() {
  const { isLogged, onLogout } = useContext(LoginContext);
  const navigate = useNavigate();

  function handleLogout() {
    onLogout();
    navigate("/");
  }


  return (
    <>
      {isLogged && (
        <a href="#" className="login-btn" onClick={handleLogout}>
          LOG OUT
        </a>
      )}

      {!isLogged && (
        <NavLink to="/login-register" className="login-btn">
          LOG IN // SIGN UP
        </NavLink>
      )}
    </>
  );
}


