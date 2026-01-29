import { useContext, useState } from "react";
import { RoleContext } from "../../store/role-context.jsx";
import { motion } from "framer-motion";

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
    react: (
      <FaReact
        className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
        color="var(--emphasis-color)"
      />
    ),
    next: (
      <RiNextjsFill
        className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
        color="var(--emphasis-color)"
      />
    ),
    node: (
      <FaNodeJs
        className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
        color="var(--emphasis-color)"
      />
    ),
    express: (
      <SiExpress
        className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
        color="var(--emphasis-color)"
      />
    ),
    postGres: (
      <BiLogoPostgresql
        className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
        color="var(--emphasis-color)"
      />
    ),
    mongoDB: (
      <BiLogoMongodb
        className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
        color="var(--emphasis-color)"
      />
    ),
    javaScript: (
      <IoLogoJavascript
        className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
        color="var(--emphasis-color)"
      />
    ),
    css: (
      <SiCsswizardry
        className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
        color="var(--emphasis-color)"
      />
    ),
    tailwind: (
      <SiTailwindcss
        className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
        color="var(--emphasis-color)"
      />
    ),
    scss: (
      <SiSass
        className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
        color="var(--emphasis-color)"
      />
    ),
    git: (
      <FaGitAlt
        className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
        color="var(--emphasis-color)"
      />
    ),
    html: (
      <TiHtml5
        className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
        color="var(--emphasis-color)"
      />
    ),
    figma: (
      <IoLogoFigma
        className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
        color="var(--emphasis-color)"
      />
    ),
    clipStudioPaint: (
      <FaPaintBrush
        className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
        color="var(--emphasis-color)"
      />
    ),
    google: (
      <FaGoogle
        className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
        color="var(--emphasis-color)"
      />
    ),
    afterEffects: (
      <SiAdobeaftereffects
        className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
        color="var(--emphasis-color)"
      />
    ),
    mental: (
      <GiBrain
        className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
        color="var(--emphasis-color)"
      />
    ),
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
    <div className="w-full flex flex-col gap-[12rem] max-sm:gap-[6rem] items-center max-md:items-start py-[10rem] max-lg:px-[0]">
      {sope[dataIndex].projects.map((project, index) => (
        <a href={project.url} target="blank" className="w-[70%] max-lg:w-[90%] max-sm:w-[100%]">
          <motion.div
            key={index}
            whileHover={{
              scale: 1.02,
              border: "1px solid var(--accent-color)",
              boxShadow: "0px 0px 10rem hsla(175, 100%, 50%, .1)",
              cursor: "pointer",
            }}
            whileTap={{
              scale: 1,
              border: "1px solid var(--emphasis-color)",
              boxShadow: "0px 0px 10rem hsla(338, 100%, 50%, .1)",
            }}
            transition={{
              type: "spring",
              duration: 0.3,
              stiffness: 400,
              damping: 12,
            }}
            style={{
              backgroundImage: `url(${images[project.image]})`,
            }}
            className={`w-[100%] gap-[1rem] bg-no-repeat bg-cover bg-blend-multiply aspect-video rounded-2xl border border-[var(--white-color)]/20 flex flex-col justify-end p-[3.6rem]`}
          >
            <h4
              className={`${fonts.roleTitle} font-bold text-[color:var(white-color)] max-lg:text-[1.6rem]`}
            >
              {project.title}
            </h4>
            <div className="flex gap-[1rem]">
              {project.logo.map((logo, index) => (
                <div key={index}>{icons[logo]}</div>
              ))}
            </div>
          </motion.div>
        </a>
      ))}
    </div>
  );
}
