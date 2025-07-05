import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "../types";
import { getCurrentUser } from "../services/AuthService";
import { undefined } from "zod";

const UserContext = createContext<IUserProvider | undefined>(undefined);

interface IUserProvider {
  user: User | null;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleUser = async () => {
    const user = await getCurrentUser();
    setUser(user)
    setIsLoading(false)
  };
  useEffect(() => {
    handleUser();
  }, [isLoading]);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = ()=>{
    const context = useContext(UserContext);
    if(context == undefined){
      throw new Error("useUser must be use within the UserProvider context")
    }
    return context;
}



export default UserProvider;
