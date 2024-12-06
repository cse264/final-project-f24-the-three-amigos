import { createContext, useContext, useState } from 'react';

// Create a context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [userType, setUserType] = useState("");
  const [userId, setUserId] = useState(0);

  return (
    <UserContext.Provider value={{ username, setUsername, userType, setUserType, userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the user context
export const useUser = () => useContext(UserContext);
