import { createContext, useState } from "react";
import { loginRequest } from "./auth.service";

export const AuthContext = createContext({
  user: null,
  onLogin: (email, password) => null,
  loading: false,
  error: null,
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const onLogin = (email, password) => {
    setLoading(true);
    loginRequest(email, password)
      .then((u) => setUser(u))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  };
  return (
    <AuthContext.Provider value={{ user, loading, error, onLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;