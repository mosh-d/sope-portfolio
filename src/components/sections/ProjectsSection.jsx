import { useContext, useState } from "react";
import { RoleContext } from "../../store/role-context.jsx";

import sope from "../../utils/data.js";
import fonts from "../../utils/fonts.js";

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
import { SiAdobeaftereffects } from "react-icons/si";

// Designer Images
import d_arcade from "../../assets/designer-pics/arcade.png";
import d_art from "../../assets/designer-pics/art.png";
import d_basheed from "../../assets/designer-pics/basheed.png";
import d_cordis from "../../assets/designer-pics/cordis.png";
import d_fiveClover from "../../assets/designer-pics/fiveclover.png";
import d_haori from "../../assets/designer-pics/haori.png";
import d_motion from "../../assets/designer-pics/motion.png";
import d_totesphere from "../../assets/designer-pics/totesphere.png";

// Engineer Images
import e_cordis from "../../assets/engineer-pics/cordis.png";
import e_fiveClover from "../../assets/engineer-pics/fiveclover.png";
import e_totesphere from "../../assets/engineer-pics/totesphere.png";

export default function ProjectsSection() {
  const { role, dataIndex, section, setSection } = useContext(RoleContext);

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
    afterEffects: (
      <SiAdobeaftereffects size="3.5rem" color="var(--emphasis-color)" />
    ),
    mental: <GiBrain size="3.5rem" color="var(--emphasis-color)" />,
  };

  const images = {
    d_arcade,
    d_art,
    d_basheed,
    d_cordis,
    d_fiveClover,
    d_haori,
    d_motion,
    d_totesphere,
    e_cordis,
    e_fiveClover,
    e_totesphere,
  };

  return (
    <div className="w-full flex flex-col gap-[12rem] items-center">
      {sope[dataIndex].projects.map((project, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${images[project.image]})`,
          }}
          className={`w-[70%] gap-[1rem] bg-no-repeat bg-cover bg-blend-multiply aspect-video rounded-2xl border border-[var(--white-color)]/20 flex flex-col justify-end p-[3.6rem]`}
        >
          <h4
            className={`${fonts.roleTitle} font-bold text-[color:var(white-color)]`}
          >
            {project.title}
          </h4>
          <div className="flex gap-[1rem]">
            {project.logo.map((logo, index) => (
              <div key={index}>{icons[logo]}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
