import { app } from "./firebaseConf";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
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
export const registerRequest = (email, pass, rePass) => {
  const auth = getAuth(app);
  return new Promise((resolve, reject) => {
    if (pass !== rePass) {
      return reject({
        errorMessage: "Error : Passwords Aren't Identical ❌",
        errorCode: 401,
      });
    }
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        resolve(userCredential.user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        reject({ errorMessage, errorCode });
      });
  });
};
