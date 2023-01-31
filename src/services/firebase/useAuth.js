import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./index";
import { useState } from "react";

const useAuth = ({ email, password }) => {
  const auth = getAuth(app);
  const { isAuth, setIsAuth } = useState(false);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("👉user", user);
      setIsAuth(true);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("🟥", errorMessage);
      setIsAuth(false);
    });
  return { isAuth };
};
export default useAuth;
