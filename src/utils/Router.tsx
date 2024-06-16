import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Starships } from "../pages/Starships";
import { StarshipDetails } from "../pages/StarshipDetails";
import { LoginRegister } from "../pages/LoginRegister";
import { Home } from "../pages/Home";
import { ProtectedRoute } from "./ProtectedRoute";
import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

export function Router() {

  const { isLogged } = useContext(LoginContext);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute isActive={isLogged} />}>
          <Route path="/starships" element={<Starships />} />
          <Route path="/starship-details/:id" element={<StarshipDetails />} />
        </Route>
        <Route path="/login-register" element={<LoginRegister />} />
      </Routes>
    </BrowserRouter>
  );
}
