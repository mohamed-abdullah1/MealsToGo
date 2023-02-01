import { app } from "./firebaseConf";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export const loginRequest = (email, password) => {
  const auth = getAuth(app);
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject({ errorMessage, errorCode });
      });
  });
};
