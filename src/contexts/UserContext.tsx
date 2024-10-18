import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
    const [users, setUsers] = useState([]);

  return (
    <>
      <UserContext.Provider
        value={{users,setUsers}}
      >
        {children}
      </UserContext.Provider>
    </>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) throw new Error("context out of provider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { UserProvider, useUser };
