import { useContext, useState } from "react";
import { LoginContext } from "../contexts/LoginContext";
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";

export function LoginRegister() {
  const { onLogin } = useContext(LoginContext);
  const navigate = useNavigate();
  const [emailLogin, setEmailLogin] = useState("eve.holt@reqres.in");
  const [passwordLogin, setPasswordLogin] = useState("cityslicka");
  const [errorLogin, setErrorLogin] = useState(undefined);
  const [emailRegistration, setEmailRegistration] =
    useState("eve.holt@reqres.in");
  const [passwordRegister, setPasswordRegister] = useState("pistol");
  const [confirmPassword, setConfirmPassword] = useState("pistol");
  const [errorRegister, setErrorRegister] = useState(undefined);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [loadingRegister, setLoadingRegister] = useState(false);

  function fetchLogin() {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: emailLogin,
        password: passwordLogin,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        console.log(response.status);
        setLoadingLogin(false);
        if (response.status === 200) {
          onLogin();
          navigate("/starships");
        } 
        return response.json();
      })
      .then((data) => {
        if (data.error) {
          setErrorLogin(data.error);
        }
      });
  }

  function fetchRegister() {
    if (confirmPassword === passwordRegister) {
      fetch("https://reqres.in/api/register", {
        method: "POST",
        body: JSON.stringify({
          email: emailRegistration,
          password: confirmPassword,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          console.log(response.status);
          setLoadingRegister(false);
          if (response.status === 200) {
            onLogin();
            navigate("/starships");
          }
          return response.json();
        })
        .then((data) => {
          if (data.error) {
            setErrorRegister(data.error);
          }
        });
    } else {
      setErrorRegister("Password doesn't match");
    }
  }

  function handleLogin() {
    setLoadingLogin(true);
    fetchLogin();
  }

  function handleRegister() {
    setLoadingRegister(true);
    fetchRegister();
  }

  return (
    <>
      <Header />
      <div className="login-register-wrapper sm:flex" style={{opacity: loadingLogin || loadingRegister ? 0.5 : 1, pointerEvents: loadingLogin || loadingRegister ? "none" : "all"}}>
        <div className="login-form sm:w-1/3 w-full">
          <h2>Log in</h2>
          <p>Sign in to your account:</p>
          <input
            type="text"
            placeholder="Username"
            value={emailLogin}
            onChange={(e) => setEmailLogin(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={passwordLogin}
            onChange={(e) => setPasswordLogin(e.target.value)}
          />
          {errorLogin && <div style={{ color: "#ff2222" }}>{errorLogin}</div>}
          <button className="mt-5" onClick={handleLogin}>
            <div> {loadingLogin ? "Logging in..." : "Log in"}</div>
          </button>
        </div>
        <div className="sm:w-16"></div>
        <div className="register-form sm:w-1/3 w-full">
          <h2>Register</h2>
          <p>Create a new account:</p>
          <input
            type="text"
            placeholder="Username"
            value={emailRegistration}
            onChange={(e) => setEmailRegistration(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={passwordRegister}
            onChange={(e) => setPasswordRegister(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errorRegister && (
            <div style={{ color: "#ff2222" }}>{errorRegister}</div>
          )}
          <button className="mt-5" onClick={handleRegister}>
            <div> {loadingRegister ? "Signing up..." : "Sign Up"}</div>
          </button>
        </div>
      </div>
    </>
  );
}
