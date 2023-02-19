import { createContext, useState } from "react";
import { iUserValue, Props } from "../interfaces";

export const UserContext = createContext({} as iUserValue);

export const UserProvider = ({ children }: Props) => {
  const [modal, setModal] = useState<boolean>(true);

  function modalForm(value: boolean) {
    setModal(value);
  }

  return (
    <UserContext.Provider value={{ modalForm, modal }}>
      {children}
    </UserContext.Provider>
  );
};
