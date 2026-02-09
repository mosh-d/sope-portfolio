import { createContext } from "react";

export const RoleContext = createContext({
  role: "",
  section: "",
  language: "English",
  setRole: () => {},
  setSection: () => {},
  setLanguage: () => {},
  dataIndex: undefined,
  sope: [],
});
