import { useContext, useState } from "react";
import { RoleContext } from "../store/role-context.jsx";

import sope from "../utils/data.js";

export default function NavDetailsLinks() {
  const { role, dataIndex, section, setSection } = useContext(RoleContext);

  return (
    <aside className="w-[40%] flex flex-col gap-[12rem]">
      <div>
        <h3>Sope Azeez</h3>
        <h4>{sope[dataIndex].title}</h4>
        <p>Msc Project Management - (Nov 2023 - Sep 2025)</p>
        <p>Bsc Information and Communication Science - (Nov 2017 - Dec 2022)</p>
      </div>
      <nav>
        <ul className="flex flex-col gap-[3.6rem]">
          <li className="cursor-pointer" onClick={() => setSection("about")}>ABOUT</li>
          <li className="cursor-pointer" onClick={() => setSection("experience")}>EXPERIENCE</li>
          <li className="cursor-pointer" onClick={() => setSection("skills")}>SKILLS</li>
          <li className="cursor-pointer" onClick={() => setSection("projects")}>PROJECTS</li>
        </ul>
      </nav>
    </aside>
  );
}
