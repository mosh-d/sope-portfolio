import { createContext } from "react";

export const RoleContext = createContext({
  role: "",
  section: "",
  setRole: () => {},
  setSection: () => {},
  dataIndex: undefined,
});