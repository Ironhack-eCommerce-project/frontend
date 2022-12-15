import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logoutUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={(user, setUser, logoutUser)}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
