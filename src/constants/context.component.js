import React, { createContext, useState } from 'react';
export const UserContext = createContext();

// This context provider is passed to any component requiring the context
export const UserProvider = ({ children }) => {
  const [experimentCondition] = useState(
    Math.floor(Math.random() * Math.floor(2))
  );
  const [vaccineAttitude] = useState(1);
  const [commentType] = useState(0);
  const [userID] = useState();
  return (
    <UserContext.Provider
      value={{
        experimentCondition,
        vaccineAttitude,
        commentType,
        userID,
      }}
    >
      {children}
      console.log({experimentCondition})
    </UserContext.Provider>
  );
};
