import { useContext } from "react";
import { RoleContext } from "../../store/role-context.jsx";

import fonts from "../../utils/fonts.js";

export default function AboutSection() {
  const { role, dataIndex, section, setSection, sope } =
    useContext(RoleContext);

  return (
    <>
      <p className={`${fonts.mainContent}`}>{sope[dataIndex].about}</p>
    </>
  );
}
