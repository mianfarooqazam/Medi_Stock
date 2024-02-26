import React from "react";
import { AuthenticatedUserContext } from "../contexts/AuthenticationContext";

export const useAuthContext = () => {
    const authContext = React.useContext(AuthenticatedUserContext);
    if (authContext === undefined) {
      throw new Error('useAuthContext must be inside a AuthProvider');
    }
    return authContext;
  };