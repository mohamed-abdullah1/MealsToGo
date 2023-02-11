import React from "react";
import { createContext, useState } from "react";
import { loginRequest, registerRequest } from "./auth.service";

export const AuthContext = createContext({
  user: null,
  onLogin: (email, password) => null,
  onRegister: (email, pass, rePass) => null,
  loading: false,
  error: "",
  changeErrDisplay: (value) => null,
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showError, setsShowError] = useState(false);
  const onLogin = (email, password) => {
    setLoading(true);
    loginRequest(email, password)
      .then((u) => setUser(u))
      .catch((e) => {
        setError(e.errorMessage.split(":")[1].trim());
      })
      .finally(() => setLoading(false));
  };
  const onRegister = (email, pass, rePass) => {
    setLoading(true);
    registerRequest(email, pass, rePass)
      .then((user) => {
        setUser(user);
      })
      .catch((e) => {
        setError(true);
        setError(e.errorMessage.split(":")[1].trim());
      })
      .finally(() => setLoading(false));
  };
  const changeErrDisplay = (val) => setsShowError(val);
  return (
    <AuthContext.Provider
      value={{ user, loading, error, onLogin, onRegister, changeErrDisplay }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
