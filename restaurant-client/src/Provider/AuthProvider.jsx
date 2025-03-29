import { createContext, useState } from "react";

const AUthContext = createContext(null);

const AuthProvider = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const authInfo = {
    user,
    loading,
  };
  return (
    <AUthContext.Provider value={authInfo}>{children}</AUthContext.Provider>
  );
};
export default AuthProvider;
