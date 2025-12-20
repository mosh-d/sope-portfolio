import { useContext } from "react";
import { RoleContext } from "../../store/role-context";
import sope from "../../utils/data";

export default function ExperienceSection() {
  const { dataIndex } = useContext(RoleContext);

  if (dataIndex === undefined) {
    return null;
  }

  return (
    <div className="flex flex-col">
      {sope[dataIndex].experience.map((experienceBlock, index) => (
        <div key={index} className="flex">
          <div>{experienceBlock.duration}</div>
          <div className="flex flex-col gap-[1.8rem]">
            <h3>{experienceBlock.title}</h3>
            <ol>
              {experienceBlock.descriptionPoints.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ol>
            <p>
              skillsApplied = [
              {experienceBlock.tags.map((tag, tagIndex) => (
                <span key={tagIndex}>{tag}, </span>
              ))}
              ]
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
