import ReactDOM from "react-dom/client";
import "./style.css";
import "tailwindcss/tailwind.css";
import { LoginProvider } from "./contexts/LoginContext";
import { Router } from "./utils/Router";
import { StarshipProvider } from "./contexts/StarshipContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <LoginProvider>
    <StarshipProvider>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <Router />
    </StarshipProvider>
  </LoginProvider>
  // </React.StrictMode>
);
