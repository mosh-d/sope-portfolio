import { useContext } from "react";
import { RoleContext } from "../../store/role-context.jsx";

import fonts from "../../utils/fonts.js";

export default function AboutSection() {
  const { role, dataIndex, section, setSection, sope } =
    useContext(RoleContext);

  return (
    <>
      <div className="p-[1rem]">
        <p className={`${fonts.mainContent}`}>{sope[dataIndex].about1}</p>
        <br />
        <p className={`${fonts.mainContent}`}>{sope[dataIndex].about2}</p>
        <br />
        <p className={`${fonts.mainContent}`}>{sope[dataIndex].about3}</p>
        <br />
        <p className={`${fonts.mainContent}`}>{sope[dataIndex].about4}</p>
        <br />
        <p className={`${fonts.mainContent}`}>{sope[dataIndex].about5}</p>
        <br />
        <p className={`${fonts.mainContent}`}>{sope[dataIndex].about6}</p>
      </div>
    </>
  );
}
