import React from "react";
import UserLoader from "./UserLoader";

const { Consumer, Provider } = React.createContext("");

function UserProvider({ children }) {
  return (
    <UserLoader>
      {user => <Provider value={user}>{children}</Provider>}
    </UserLoader>
  );
}

export { Consumer, Provider, UserProvider };
