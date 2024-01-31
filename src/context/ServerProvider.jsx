import React, { createContext, useContext } from "react";

const ServerProviders = createContext();

function ServerProvider({ children }) {
  return (
    <ServerProviders.Provider value={{ name: "sumit" }}>
      {children}
    </ServerProviders.Provider>
  );
}

export default ServerProvider;

export const useServerProvidersContext = () => {
  return useContext(ServerProviders);
};
