import { createContext, useState, useEffect } from "react";
import { fetchData } from "../api";

export const UserContext = createContext();
const baseApiUrl = "https://jsonplaceholder.typicode.com/todos";

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  // Obtener lista de todos los usuarios
  useEffect(() => {
    fetchData(baseApiUrl).then((res) => {
      setUsers(res);
    });
  }, []);

  return <UserContext.Provider value={{users}}>{children}</UserContext.Provider>;
};

export default UserProvider;
