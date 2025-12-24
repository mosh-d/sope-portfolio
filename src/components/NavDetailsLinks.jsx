import { useContext, useState } from "react";
import { RoleContext } from "../store/role-context.jsx";

// Icons
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoBehance } from "react-icons/io5";

// Images
import sope1 from "../assets/sope-pics/sope-1.png";
import sope2 from "../assets/sope-pics/sope-2.png";
import sope3 from "../assets/sope-pics/sope-3.png";
import sope4 from "../assets/sope-pics/sope-4.png";

import sope from "../utils/data.js";
import fonts from "../utils/fonts.js";

export default function NavDetailsLinks() {
  const { role, dataIndex, section, setSection } = useContext(RoleContext);

  return (
    <aside className="w-[40%] bg-bottom bg-cover bg-center bg-no-repeat flex flex-col justify-between h-full gap-[12rem]">
      <div>
        <h3 className={`${fonts.mainHeading}`}>Sope Azeez</h3>
        <h4 className={`${fonts.roleTitle} text-[color:var(--text-color)]`}>
          {sope[dataIndex].title}
        </h4>
        <p className={`${fonts.eduTitle}`}>
          <em className="font-bold text-[color:var(--white-color)]">Msc</em>{" "}
          Project Management - (Nov 2023 - Sep 2025)
        </p>
        <p className={`${fonts.eduTitle}`}>
          <em className="font-bold text-[color:var(--white-color)]">Bsc</em>{" "}
          Information and Communication Science - (Nov 2017 - Dec 2022)
        </p>
      </div>
      <nav>
        <ul className="flex flex-col gap-[3.6rem] w-fit">
          <li
            className={`${fonts.mainContent} ${
              section === "about" && "active"
            } cursor-pointer w-fit`}
            onClick={() => setSection("about")}
          >
            ABOUT
          </li>
          <li
            className={`${fonts.mainContent} ${
              section === "experience" && "active"
            } cursor-pointer w-fit`}
            onClick={() => setSection("experience")}
          >
            EXPERIENCE
          </li>
          <li
            className={`${fonts.mainContent} ${
              section === "skills" && "active"
            } cursor-pointer w-fit`}
            onClick={() => setSection("skills")}
          >
            SKILLS
          </li>
          <li
            className={`${fonts.mainContent} ${
              section === "projects" && "active"
            } cursor-pointer w-fit`}
            onClick={() => setSection("projects")}
          >
            PROJECTS
          </li>
        </ul>
      </nav>
      <menu className="flex gap-[4.8rem] items-center">
        <li>
          <FaGithub size="3.5rem" color="var(--accent-color)" />
        </li>
        <li>
          <TiSocialLinkedinCircular size="4.5rem" color="var(--accent-color)" />
        </li>
        <li>
          <IoLogoWhatsapp size="3.5rem" color="var(--accent-color)" />
        </li>
        <li>
          <IoLogoBehance size="3.5rem" color="var(--accent-color)" />
        </li>
      </menu>
    </aside>
  );
}
