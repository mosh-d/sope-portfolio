import { useState, useMemo } from "react";
import sope from "./utils/data.js";
import fonts from "./utils/fonts.js";
import { RoleContext } from "./store/role-context.jsx";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";

// Components
import NavDetailsLinks from "./components/NavDetailsLinks.jsx";
import AboutSection from "./components/sections/AboutSection.jsx";
import ExperienceSection from "./components/sections/ExperienceSection.jsx";
import SkillsSection from "./components/sections/SkillsSection.jsx";
import ProjectsSection from "./components/sections/ProjectsSection.jsx";

// Images
import sope1 from "./assets/sope-pics/sope-1.png";
import sope2 from "./assets/sope-pics/sope-2.png";
import sope3 from "./assets/sope-pics/sope-3.png";
import sope4 from "./assets/sope-pics/sope-4.png";

// Icons
import { GrLanguage } from "react-icons/gr";

function App() {
  const [role, setRole] = useState("");
  console.log("Role: ", role);
  const [section, setSection] = useState("about");
  console.log("Section: ", section);
  const [language, setLanguage] = useState("English");
  console.log("Language: ", language);

  const [hoveredSection, setHoveredSection] = useState(null);

  const dataIndex = useMemo(() => {
    if (role === "designer") return 0;
    if (role === "engineer") return 1;
    return undefined;
  }, [role]);

  return (
    <RoleContext.Provider
      value={{ role, setRole, dataIndex, section, setSection }}
    >
      <div className="overflow-x-hidden">
        <div
          data-component="Language selector"
          className="flex absolute m-[1rem] gap-[1rem] z-20"
        >
          <GrLanguage color="var(--emphasis-color)" size="2rem" />
          <menu className="flex gap-[.5rem] h-full items-end mt-[.2rem]">
            <button
              onClick={() => setLanguage("English")}
              className="text-[color:var(--emphasis-color)] cursor-pointer"
              style={{
                backgroundColor:
                  language === "English"
                    ? "var(--accent-color)"
                    : "transparent",
              }}
            >
              <span className={`${fonts.heroSmall}`}>Eng</span>
            </button>
            <button
              onClick={() => setLanguage("Japanese")}
              className="text-[color:var(--emphasis-color)] cursor-pointer"
              style={{
                backgroundColor:
                  language === "Japanese"
                    ? "var(--accent-color)"
                    : "transparent",
              }}
            >
              <span className={`${fonts.heroSmall}`}>日本語</span>
            </button>
          </menu>
        </div>
        <header className="bg-[color:var(--background-color)] h-[70vh] min-h-[70rem] shadow-xl z-20">
          <div className="absolute inset-0 overflow-hidden w-full">
            <motion.h1
              className={`${fonts.heroTitle} absolute z-10 mix-blend-difference whitespace-nowrap`}
              initial={{ x: "100vw" }}
              animate={{ x: "-100vw" }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear",
              }}
            >
              Welcome to Sope's Portfolio
            </motion.h1>
          </div>
          <div className="flex h-[100%]">
            {" "}
            <motion.section
              onClick={() => {
                setRole("designer");
                setTimeout(() => {
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  });
                }, 1500);
              }}
              onMouseEnter={() => setHoveredSection("designer")}
              onMouseLeave={() => setHoveredSection(null)}
              className={`w-[50%] h-[100%] cursor-pointer p-[3rem] bg-[var(--white-color)] flex flex-col justify-center items-center`}
              animate={{
                width:
                  hoveredSection === "designer" || role === "designer"
                    ? "65%"
                    : hoveredSection === "engineer" || role === "engineer"
                    ? "35%"
                    : "50%",
                opacity: role === "engineer" ? 0.7 : 1,
                zIndex: role === "engineer" ? 1 : 2,
                filter:
                  role === "engineer" && hoveredSection !== "designer"
                    ? "blur(2px)"
                    : "blur(0px)",
              }}
              transition={{ type: "tween", duration: 1.5, ease: "anticipate" }}
              style={{ transformOrigin: "left" }}
            >
              <div className="inline-block w-[35rem] mb-[20rem]">
                <h2
                  className={`${fonts.mainHeading} text-[color:var(--background-color)]`}
                >
                  <span className="text-[color:var(--emphasis-color)]">#</span>
                  designer
                </h2>

                <div className="flex flex-wrap gap-[.8rem]">
                  {sope[0].tags.map((tag, index) => (
                    <div
                      key={index}
                      className="bg-[color:var(--background-color)]/90 px-[.8rem] py-[.2rem] rounded-sm"
                    >
                      <span
                        className={`${fonts.heroSmall} text-[color:var(--white-color)]`}
                      >
                        #{tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
            <motion.section
              onClick={() => {
                setRole("engineer");
                setTimeout(() => {
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  });
                }, 1500);
              }}
              onMouseEnter={() => setHoveredSection("engineer")}
              onMouseLeave={() => setHoveredSection(null)}
              className={`w-[50%] h-[100%] cursor-pointer flex flex-col justify-center items-center p-[3rem] bg-[var(--background-color-2)] text-[color:var(--white-color)]`}
              animate={{
                width:
                  hoveredSection === "engineer" || role === "engineer"
                    ? "65%"
                    : hoveredSection === "designer" || role === "designer"
                    ? "35%"
                    : "50%",
                opacity: role === "designer" ? 0.7 : 1,
                zIndex: role === "designer" ? 1 : 2,
                filter:
                  role === "designer" && hoveredSection !== "engineer"
                    ? "blur(2px)"
                    : "blur(0px)",
              }}
              transition={{ type: "tween", duration: 1.5, ease: "anticipate" }}
              style={{ transformOrigin: "right" }}
            >
              <div className="inline-block mt-[20rem]">
                <h2
                  className={`${fonts.mainHeading} text-[color:var(--white-color)]`}
                >{`<Engineer />`}</h2>
                <div className={`${fonts.heroSmall}`}>
                  <pre>
                    <code>
                      <span className="text-[color:var(--emphasis-color)]">
                        const
                      </span>{" "}
                      <span className="text-[color:var(--accent-color)]">
                        SOPE
                      </span>{" "}
                      = <span className="text-amber-300">{"{"}</span>
                      <br />
                      &nbsp;&nbsp;
                      <span className="text-[color:var(--text-color)]">
                        frontEnd:
                      </span>
                      <span className="text-[color:var(--emphasis-color)]">
                        {" "}
                        [
                      </span>
                      HTML, CSS, JavaScript, React, Next.js
                      <span className="text-[color:var(--emphasis-color)]">
                        ]
                      </span>
                      ,
                      <br />
                      &nbsp;&nbsp;
                      <span className="text-[color:var(--text-color)]">
                        backEnd:
                      </span>
                      <span className="text-[color:var(--emphasis-color)]">
                        {" "}
                        [
                      </span>
                      Node.js, Express.js, MongoDb, PostgreSQL
                      <span className="text-[color:var(--emphasis-color)]">
                        ]
                      </span>
                      <br />
                      <span className="text-amber-300">{"}"}</span>;
                    </code>
                  </pre>
                </div>
              </div>
            </motion.section>
          </div>
        </header>
        <main className="relative bg-cover bg-center bg-no-repeat p-[12rem] max-lg:px-[4rem] h-[100vh] min-h-[80rem] overflow-hidden">
          <motion.div
            className="absolute left-[5rem] bottom-0 inset-0 bg-bottom bg-cover bg-no-repeat scale-[.7]"
            intial={{ x: -50 }}
            animate={{ x: 0 }}
            style={{
              backgroundImage: `url(${
                section === "about" && role
                  ? sope1
                  : section === "experience"
                  ? sope2
                  : section === "skills"
                  ? sope3
                  : section === "projects"
                  ? sope4
                  : undefined
              })`,
              width: "80rem",
              bottom: "-20rem",
              zIndex: "1",
            }}
          />
          {role && (
            <div className="flex h-full items-start gap-[4rem]">
              <NavDetailsLinks />
              <section className="flex flex-col w-[60%] overflow-y-auto overflow-x-hidden h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={section}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{
                      type: "spring",
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="h-full"
                  >
                    {section === "about" && <AboutSection />}
                    {section === "experience" && <ExperienceSection />}
                    {section === "skills" && <SkillsSection />}
                    {section === "projects" && <ProjectsSection />}
                  </motion.div>
                </AnimatePresence>
              </section>
            </div>
          )}
          {role === "" ? (
            <section className="flex justify-center items-center">
              <p
                className={`${fonts.initialText} text-[color:var(--text-color)]`}
              >
                Pick a side to begin.
              </p>
            </section>
          ) : undefined}
        </main>
      </div>
    </RoleContext.Provider>
  );
}

export default App;
