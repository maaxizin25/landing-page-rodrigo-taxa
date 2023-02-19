import { Props } from "../interfaces";
import { UserProvider } from "./UserContext";

export const Providers = ({ children }: Props) => {
  return <UserProvider>{children}</UserProvider>;
};
