import { ReactNode, createContext, useState } from "react";

type LoginContextType = {
  onLogin: () => void;
  onLogout: () => void;
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoginContext = createContext<LoginContextType>({
  onLogin: () => {},
  onLogout: () => {},
  isLogged: false,
  setIsLogged: () => {},
});

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [isLogged, setIsLogged] = useState(false);

  function onLogin() {
    if (isLogged === false) {
      setIsLogged(true);
    }
  }

  function onLogout() {
    if (isLogged === true) {
      setIsLogged(false);
    }
  }

  return (
    <LoginContext.Provider value={{ onLogin, onLogout, isLogged, setIsLogged }}>
      {children}
    </LoginContext.Provider>
  );
};
