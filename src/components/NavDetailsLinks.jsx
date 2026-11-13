import { useContext, useState } from "react";
import { RoleContext } from "../store/role-context.jsx";
import { motion } from "motion/react";

// Icons
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoBehance } from "react-icons/io5";

import translations from "../utils/translations.js";
import fonts from "../utils/fonts.js";
import MobileMenu from "./MobileMenu.jsx";

export default function NavDetailsLinks() {
  const { role, dataIndex, section, setSection, language, sope } =
    useContext(RoleContext);

  // Get translations based on language
  const t = language === "Japanese" ? translations.ja : translations.en;

  return (
    <aside className="w-[40%] max-md:w-full bg-bottom bg-cover bg-no-repeat flex flex-col justify-between h-full max-md:h-auto gap-[12rem] max-md:gap-[4rem] max-sm:gap-[1rem]">
      <div className="max-md:flex max-md:flex-row max-md:w-full max-md:justify-between">
        <div>
          <h3 className={`${fonts.mainHeading} max-sm:text-[4rem] text-white`}>
            {t.name}
          </h3>
          <h4 className={`${fonts.roleTitle} text-[color:var(--text-color)]`}>
            {sope[dataIndex].title}
          </h4>
          <p className={`${fonts.eduTitle}`}>
            <em className="font-bold text-[color:var(--white-color)]">
              {language === "Japanese" ? "\u4fee\u58eb" : "Msc"}
            </em>{" "}
            {language === "Japanese"
              ? "\uff08\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30de\u30cd\u30b8\u30e1\u30f3\u30c8\uff09\u2014 2023\u5e7411\u6708\uff5e2025\u5e749\u6708"
              : "Project Management - (Nov 2023 - Sep 2025)"}
          </p>
          <p className={`${fonts.eduTitle}`}>
            <em className="font-bold text-[color:var(--white-color)]">
              {language === "Japanese" ? "\u5b66\u58eb" : "Bsc"}
            </em>{" "}
            {language === "Japanese"
              ? "\uff08\u60c5\u5831\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u79d1\u5b66\uff09\u2014 2017\u5e7411\u6708\uff5e2022\u5e7412\u6708"
              : "Information and Communication Science - (Nov 2017 - Dec 2022)"}
          </p>
        </div>
        <MobileMenu />
      </div>
      <nav className="relative">
        <ul className="flex flex-col gap-[3.6rem] w-max max-md:hidden">
          {[
            ["projects", t.projects],
            ["experience", t.experience],
            ["skills", t.skills],
            ["about", t.about],
          ].map(([key, label]) => (
            <motion.li
              key={key}
              className="relative w-fit"
              whileHover={{
                backgroundColor: "hsla(338, 85%, 47%, .15)",
              }}
              transition={{ duration: 1, ease: "easeOut", type: "spring" }}
            >
              <button
                type="button"
                onClick={() => setSection(key)}
                aria-current={section === key}
                className="relative cursor-pointer w-fit pl-[1.2rem] py-[.2rem] pr-[4rem]"
              >
                {/* Active background */}
                <motion.span
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
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>
      <ul className="flex gap-[4.8rem] items-center z-10">
        <motion.li
          className="inline-flex"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href="https://github.com/mosh-d"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub size="3.5rem" color="var(--accent-color)" />
          </a>
        </motion.li>

        <motion.li
          className="inline-flex"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href="https://www.linkedin.com/in/sope-azeez/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <TiSocialLinkedinCircular
              size="4.5rem"
              color="var(--accent-color)"
            />
          </a>
        </motion.li>

        <motion.li
          className="inline-flex"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href="https://wa.me/2348106125405?text=Hello%20I%20saw%20your%20portfolio%20online"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message on WhatsApp"
          >
            <IoLogoWhatsapp size="3.5rem" color="var(--accent-color)" />
          </a>
        </motion.li>

        <motion.li
          className="inline-flex"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href="https://www.behance.net/sopeazeez"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance portfolio"
          >
            <IoLogoBehance size="3.5rem" color="var(--accent-color)" />
          </a>
        </motion.li>
      </ul>
    </aside>
  );
}
