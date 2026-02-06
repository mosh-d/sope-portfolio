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
import MobileMenu from "./MobileMenu.jsx";

export default function NavDetailsLinks() {
  const { role, dataIndex, section, setSection } = useContext(RoleContext);

  return (
    <aside className="w-[40%] max-md:w-full bg-bottom bg-cover bg-no-repeat flex flex-col justify-between h-full max-md:h-auto gap-[12rem] max-md:gap-[4rem] max-sm:gap-[1rem]">
      <div className="max-md:flex max-md:flex-row max-md:w-full max-md:justify-between">
        <div>
          <h3 className={`${fonts.mainHeading} max-sm:text-[4rem]`}>Sope Azeez</h3>
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
        <MobileMenu />
      </div>
      <nav className="relative">
        <ul className="flex flex-col gap-[3.6rem] w-max max-md:hidden">
          {[
            ["projects", "PROJECTS"],
            ["experience", "EXPERIENCE"],
            ["skills", "SKILLS"],
            ["about", "ABOUT"],
          ].map(([key, label]) => (
            <motion.li
              key={key}
              className="relative cursor-pointer w-fit pl-[1.2rem] py-[.2rem] pr-[4rem]"
              onClick={() => setSection(key)}
              whileHover={{
                backgroundColor: "hsla(338, 85%, 47%, .15)",
              }}
              transition={{ duration: 1, ease: "easeOut", type: "spring" }}
            >
              {/* Active background */}
              <motion.div
                className="absolute inset-0 bg-[var(--emphasis-color)]"
                initial={false}
                animate={{
                  opacity: section === key ? 1 : 0,
                  scaleX: section === key ? 1 : 0,
                }}
                transition={{ duration: 0.7, ease: "easeOut", type: "spring" }}
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
      <ul className="flex gap-[4.8rem] items-center z-10">
        <motion.li
          className="cursor-pointer inline-flex"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href="https://github.com/mosh-d" target="blank">
            <FaGithub size="3.5rem" color="var(--accent-color)" />
          </a>
        </motion.li>

        <motion.li
          className="cursor-pointer inline-flex"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href="https://www.linkedin.com/in/sope-azeez/" target="blank">
            <TiSocialLinkedinCircular
              size="4.5rem"
              color="var(--accent-color)"
            />
          </a>
        </motion.li>

        <motion.li
          className="cursor-pointer inline-flex"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href="https://wa.me/2348106125405?text=Hello%20I%20saw%20your%20portfolio%20online"
            target="blank"
          >
            <IoLogoWhatsapp size="3.5rem" color="var(--accent-color)" />
          </a>
        </motion.li>

        <motion.li
          className="cursor-pointer inline-flex"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href="https://www.behance.net/sopeazeez" target="blank">
            <IoLogoBehance size="3.5rem" color="var(--accent-color)" />
          </a>
        </motion.li>
      </ul>
    </aside>
  );
}
