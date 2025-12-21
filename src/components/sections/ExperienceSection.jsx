import { useContext } from "react";
import { RoleContext } from "../../store/role-context";

import sope from "../../utils/data";
import fonts from "../../utils/fonts";

export default function ExperienceSection() {
  const { role, dataIndex } = useContext(RoleContext);

  if (dataIndex === undefined) {
    return null;
  }

  return (
    <div className="flex flex-col w-full gap-[12rem]">
      {sope[dataIndex].experience.map((experienceBlock, index) => (
        <div key={index} className="flex w-full">
          <div className={`${fonts.mainContent} w-[30%]`}>
            {experienceBlock.duration}
          </div>
          <div
            className={`${fonts.mainContent} flex flex-col gap-[1.8rem] w-[70%]`}
          >
            <h3 className={`${fonts.jobTitle} `}>{experienceBlock.title}</h3>
            <ul className="list-disc ml-6">
              {experienceBlock.descriptionPoints.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
            <div>
              {role === "engineer" && (
                <p>
                  <span className="text-[color:var(--accent-color)]">
                    skillsApplied
                  </span>{" "}
                  ={" "}
                  <span className="text-[color:var(--emphasis-color)]">[</span>
                  {experienceBlock.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-[color:var(--white-color)]"
                    >
                      {tag}
                      {tagIndex < experienceBlock.tags.length - 1 ? ", " : ""}
                    </span>
                  ))}
                  <span className="text-[color:var(--emphasis-color)]">]</span>
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
