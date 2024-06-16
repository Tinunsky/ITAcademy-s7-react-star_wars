import { ReactNode, createContext, useState } from "react";

type LoginContextType = {
  onLogin: (email: string) => void;
  onLogout: () => void;
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  userName: string;
};

export const LoginContext = createContext<LoginContextType>({
  onLogin: () => { },
  onLogout: () => { },
  isLogged: false,
  setIsLogged: () => { },
  userName: undefined
});

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const userName = localStorage.getItem("userName")
  const hasUserName = !!userName;

  const [isLogged, setIsLogged] = useState(hasUserName);

  function onLogin(email) {
    if (isLogged === false) {
      setIsLogged(true);
      localStorage.setItem("userName", email);
    }
  }

  function onLogout() {
    setIsLogged(false);
    localStorage.removeItem("userName");
  }

  return (
    <LoginContext.Provider value={{ onLogin, onLogout, isLogged, setIsLogged, userName }}>
      {children}
    </LoginContext.Provider>
  );
};
