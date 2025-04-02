import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";

const auth = getAuth(app);

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // Accept children as a prop
  const [user, setUser] = useState(null); // Explicitly set null for clarity
  const [loading, setLoading] = useState(true);
  // !create an user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // user login with email and password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(email, password);
  };

  //observation of user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user ---> ", currentUser);
      setLoading(false);
    });

    return () => unSubscribe(); // Ensure cleanup function is correctly returned
  }, []);
  //   logOut for user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  //! Provide value
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext }; // Exporting AuthContext for use in other components
