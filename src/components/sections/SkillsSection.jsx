import { useContext } from "react";
import { RoleContext } from "../../store/role-context";

import sope from "../../utils/data";

export default function SkillsSection() {
  const { dataIndex, role } = useContext(RoleContext);

  return (
    <>
      {role === "engineer" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {sope[1].skills.map((skill, index) => (
            <div key={index}>{skill}</div>
          ))}
        </div>
      )}

      {role === "designer" && (
        <div className="flex flex-col">
          {sope[0].skills.map((skill, index) => (
            <div key={index} className="flex flex-col">
              <div>{skill.title}</div>
              <div>{skill.tags}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
