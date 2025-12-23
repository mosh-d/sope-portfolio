import { useContext } from "react";
import { RoleContext } from "../../store/role-context";

// Icons
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCsswizardry } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoFigma } from "react-icons/io5";
import { FaPaintBrush } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

import sope from "../../utils/data";
import fonts from "../../utils/fonts";

export default function SkillsSection() {
  const { dataIndex, role } = useContext(RoleContext);

  const icons = {
    react: <FaReact size="3.5rem" color="var(--emphasis-color)" />,
    next: <RiNextjsFill size="3.5rem" color="var(--emphasis-color)" />,
    node: <FaNodeJs size="3.5rem" color="var(--emphasis-color)" />,
    express: <SiExpress size="3.5rem" color="var(--emphasis-color)" />,
    postGres: <BiLogoPostgresql size="3.5rem" color="var(--emphasis-color)" />,
    mongoDB: <BiLogoMongodb size="3.5rem" color="var(--emphasis-color)" />,
    javaScript: (
      <IoLogoJavascript size="3.5rem" color="var(--emphasis-color)" />
    ),
    css: <SiCsswizardry size="3.5rem" color="var(--emphasis-color)" />,
    tailwind: <SiTailwindcss size="3.5rem" color="var(--emphasis-color)" />,
    scss: <SiSass size="3.5rem" color="var(--emphasis-color)" />,
    git: <FaGitAlt size="3.5rem" color="var(--emphasis-color)" />,
    html: <TiHtml5 size="3.5rem" color="var(--emphasis-color)" />,
    figma: <IoLogoFigma size="3.5rem" color="var(--emphasis-color)" />,
    clipStudioPaint: (
      <FaPaintBrush size="3.5rem" color="var(--emphasis-color)" />
    ),
    google: <FaGoogle size="3.5rem" color="var(--emphasis-color)" />,
    mental: <GiBrain size="3.5rem" color="var(--emphasis-color)" />,
  };

  return (
    <>
      {role === "engineer" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {sope[1].skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center border border-white/10 rounded-2xl py-[2rem] px-[2rem]"
            >
              <div>{icons[skill.icon]}</div>
              <h4 className={`${fonts.skillHeading} `}>{skill.title}</h4>
            </div>
          ))}
        </div>
      )}

      {role === "designer" && (
        <div className="flex flex-col w-full gap-[4.8rem] overflow-x-hidden">
          {sope[0].skills.map((skill, index) => (
            <div key={index} className="flex flex-col w-full gap-[3.6rem] justify-center items-center p-[4.8rem] border border-[var(--white-color)]/10 rounded-2xl">
              <div className="flex flex-col items-center">
                <div>{icons[skill.icon]}</div>
                <h4 className={`${fonts.skillHeading} `}>{skill.title}</h4>
              </div>
              <hr className="w-full opacity-10" />
              <div
                className={`${fonts.mainContent} text-[var(--black-color)] flex-wrap justify-center w-full inline-flex gap-[1.6rem]`}
              >
                {skill.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[var(--white-color)] rounded-md py-[.4rem] px-[1.2rem]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
