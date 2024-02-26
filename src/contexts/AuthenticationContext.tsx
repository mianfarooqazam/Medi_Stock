import { User } from "firebase/auth";
import { createContext, useState } from "react";

interface AuthContextValue {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
  }

export const AuthenticatedUserContext = createContext<AuthContextValue | undefined>(undefined);

type Props = {
    children: React.JSX.Element
}

const AuthenticatedUserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

export default AuthenticatedUserProvider;