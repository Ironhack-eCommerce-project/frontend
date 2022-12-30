import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);

  const storeUser = (user) => {
    localStorage.setItem("user", user);
  };

  const logoutUser = () => {
    setUser(null);
    // localStorage.removeItem("user", user);
  };

  return (
    <UserContext.Provider
      value={{ isAdmin, adminUser: setIsAdmin, user, storeUser, loginUser: setUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
