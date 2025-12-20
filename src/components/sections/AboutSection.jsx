import { useContext } from "react";
import { RoleContext } from "../../store/role-context.jsx";

import sope from "../../utils/data.js"

export default function AboutSection() {
  const { role, dataIndex, section, setSection } = useContext(RoleContext);

  return <>
    <p>{sope[dataIndex].about}</p>
  </>;
}
