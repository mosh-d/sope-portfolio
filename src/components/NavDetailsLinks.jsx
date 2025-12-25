import { useContext, useState } from "react";
import { RoleContext } from "../store/role-context.jsx";
import { motion } from "motion/react";

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
        <ul className="flex flex-col gap-[3.6rem] w-max">
          {[
            ["about", "ABOUT"],
            ["experience", "EXPERIENCE"],
            ["skills", "SKILLS"],
            ["projects", "PROJECTS"],
          ].map(([key, label]) => (
            <motion.li
              key={key}
              className="relative cursor-pointer w-fit pl-[1.2rem] py-[.2rem] pr-[4rem]"
              onClick={() => setSection(key)}
            >
              {/* Active background */}
              <motion.div
                className="absolute inset-0 bg-[var(--emphasis-color)]"
                initial={false}
                animate={{
                  opacity: section === key ? 1 : 0,
                  scaleX: section === key ? 1 : 0,
                }}
                transition={{ duration: 0.25, ease: "easeOut", type: "spring" }}
                style={{ originX: 0 }}
              />

              {/* Text */}
              <span
                className={`${fonts.mainContent} relative z-10`}
                style={{
                  color:
                    section === key
                      ? "var(--white-color)"
                      : "var(--text-color)",
                }}
              >
                {label}
              </span>
            </motion.li>
          ))}
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
