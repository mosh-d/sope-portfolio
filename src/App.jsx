import "simplebar-react/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import { useState, useMemo, useEffect, useRef } from "react";
import sopeEn from "./utils/data.js";
import sopeJa from "./utils/data-ja.js";
import translations from "./utils/translations.js";
import fonts from "./utils/fonts.js";
import { RoleContext } from "./store/role-context.jsx";
import { motion, useReducedMotion } from "motion/react";
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

const MOBILE_QUERY = "(max-width: 767px)";

function App() {
  const [role, setRole] = useState("");
  const [section, setSection] = useState("projects");
  const [language, setLanguage] = useState("English");

  const [hoveredSection, setHoveredSection] = useState(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia(MOBILE_QUERY).matches,
  );
  const scrollRef = useRef(null);
  const scrollTimerRef = useRef(null);

  // Track the mobile breakpoint without rendering the desktop layout first
  useEffect(() => {
    const query = window.matchMedia(MOBILE_QUERY);
    const onChange = (event) => setIsMobile(event.matches);

    setIsMobile(query.matches);
    query.addEventListener("change", onChange);

    return () => query.removeEventListener("change", onChange);
  }, []);

  // Clear any pending scroll when the component goes away
  useEffect(() => {
    return () => {
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    };
  }, []);

  const chooseRole = (nextRole) => {
    if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);

    setRole(nextRole);
    scrollTimerRef.current = setTimeout(() => {
      scrollTimerRef.current = null;
      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior: shouldReduceMotion ? "auto" : "smooth",
        });
      }
    }, 1500);
  };

  const handleRoleKeyDown = (event, nextRole) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      chooseRole(nextRole);
    }
  };

  // Select data based on language
  const sope = useMemo(() => {
    return language === "Japanese" ? sopeJa : sopeEn;
  }, [language]);

  // Get translations based on language
  const t = useMemo(() => {
    return language === "Japanese" ? translations.ja : translations.en;
  }, [language]);

  const dataIndex = useMemo(() => {
    if (role === "designer") return 0;
    if (role === "engineer") return 1;
    return undefined;
  }, [role]);

  return (
    <RoleContext.Provider
      value={{
        role,
        setRole,
        dataIndex,
        section,
        setSection,
        language,
        setLanguage,
        sope,
      }}
    >
      <SimpleBar
        scrollableNodeProps={{ ref: scrollRef }}
        style={{ maxHeight: "100dvh" }}
      >
        <div className="overflow-x-hidden">
          <div
            data-component="Language selector"
            className="flex absolute m-[1rem] gap-[1rem] z-20"
          >
            <GrLanguage className="text-[2rem] max-sm:text-[3rem]" color="var(--emphasis-color)"  />
            <menu className="flex items-center gap-[.5rem] h-full mt-[.2rem]">
              <button
                type="button"
                onClick={() => setLanguage("English")}
                aria-pressed={language === "English"}
                className="text-[color:var(--emphasis-color)] cursor-pointer"
                style={{
                  backgroundColor:
                    language === "English"
                      ? "var(--accent-color)"
                      : "transparent",
                }}
              >
                <span className={`${fonts.heroSmall} max-sm:text-[2rem]`}>Eng</span>
              </button>
              <button
                type="button"
                onClick={() => setLanguage("Japanese")}
                aria-pressed={language === "Japanese"}
                className="text-[color:var(--emphasis-color)] cursor-pointer"
                style={{
                  backgroundColor:
                    language === "Japanese"
                      ? "var(--accent-color)"
                      : "transparent",
                }}
              >
                <span className={`${fonts.heroSmall} max-sm:text-[2rem]`}>
                  {"\u65e5\u672c\u8a9e"}
                </span>
              </button>
            </menu>
          </div>
          <div className="absolute inset-0 overflow-hidden w-full mt-[4rem]">
            <motion.h1
              className={`absolute z-10 mix-blend-difference whitespace-nowrap hidden max-md:block text-[4rem] text-white font-thin`}
              initial={{ x: shouldReduceMotion ? 0 : "100vw" }}
              animate={{ x: shouldReduceMotion ? 0 : "-100vw" }}
              transition={{
                repeat: shouldReduceMotion ? 0 : Infinity,
                repeatType: "loop",
                duration: shouldReduceMotion ? 0 : 15,
                ease: "linear",
              }}
            >
              {t.welcomeMessage}
            </motion.h1>
          </div>
          <header className="bg-[color:var(--background-color)] h-[70vh] min-h-[70rem] shadow-xl z-20">
            <div className="absolute inset-0 overflow-hidden w-full">
              <motion.h1
                className={`${fonts.heroTitle} absolute z-10 mix-blend-difference whitespace-nowrap max-md:hidden`}
                initial={{ x: shouldReduceMotion ? 0 : "100vw" }}
                animate={{ x: shouldReduceMotion ? 0 : "-100vw" }}
                transition={{
                  repeat: shouldReduceMotion ? 0 : Infinity,
                  repeatType: "loop",
                  duration: shouldReduceMotion ? 0 : 15,
                  ease: "linear",
                }}
              >
                {t.welcomeMessage}
              </motion.h1>
            </div>
            <div className="flex h-[100%] max-md:flex-col">
              {" "}
              <motion.section
                role="button"
                tabIndex={0}
                aria-label="Explore the design portfolio"
                aria-pressed={role === "designer"}
                onClick={() => chooseRole("designer")}
                onKeyDown={(event) => handleRoleKeyDown(event, "designer")}
                onMouseEnter={() => setHoveredSection("designer")}
                onMouseLeave={() => setHoveredSection(null)}
                className={`w-[50%] max-md:w-full h-[100%] cursor-pointer p-[3rem] bg-[var(--white-color)] flex flex-col justify-center items-center`}
                animate={{
                  ...(isMobile
                    ? {
                        height:
                          hoveredSection === "designer" || role === "designer"
                            ? "65%"
                            : hoveredSection === "engineer" || role === "engineer"
                              ? "35%"
                              : "100%",
                        width: "100%",
                      }
                    : {
                        width:
                          hoveredSection === "designer" || role === "designer"
                            ? "65%"
                            : hoveredSection === "engineer" || role === "engineer"
                              ? "35%"
                              : "50%",
                        height: "100%",
                      }),
                  opacity: role === "engineer" ? 0.7 : 1,
                  zIndex: role === "engineer" ? 1 : 2,
                  filter:
                    role === "engineer" && hoveredSection !== "designer"
                      ? "blur(2px)"
                      : "blur(0px)",
                }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { type: "tween", duration: 1.5, ease: "anticipate" }
                }
                style={{ transformOrigin: "left" }}
              >
                <div className="inline-block  w-[35rem] mb-[20rem] max-md:mb-0">
                  <h2
                    className={`${fonts.mainHeading} text-[color:var(--background-color)]`}
                  >
                    <span className="text-[color:var(--emphasis-color)]">
                      #
                    </span>
                    {t.designer}
                  </h2>

                  <div className="flex flex-wrap gap-[.8rem] max-md:hidden">
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
                role="button"
                tabIndex={0}
                aria-label="Explore the engineering portfolio"
                aria-pressed={role === "engineer"}
                onClick={() => chooseRole("engineer")}
                onKeyDown={(event) => handleRoleKeyDown(event, "engineer")}
                onMouseEnter={() => setHoveredSection("engineer")}
                onMouseLeave={() => setHoveredSection(null)}
                className={`w-[50%] max-md:w-full h-[100%] cursor-pointer flex flex-col justify-center items-center p-[3rem] bg-[var(--background-color-2)] text-[color:var(--white-color)]`}
                animate={{
                  ...(isMobile
                    ? {
                        height:
                          hoveredSection === "engineer" || role === "engineer"
                            ? "65%"
                            : hoveredSection === "designer" || role === "designer"
                              ? "35%"
                              : "100%",
                        width: "100%",
                      }
                    : {
                        width:
                          hoveredSection === "engineer" || role === "engineer"
                            ? "65%"
                            : hoveredSection === "designer" || role === "designer"
                              ? "35%"
                              : "50%",
                        height: "100%",
                      }),
                  opacity: role === "designer" ? 0.7 : 1,
                  zIndex: role === "designer" ? 1 : 2,
                  filter:
                    role === "designer" && hoveredSection !== "engineer"
                      ? "blur(2px)"
                      : "blur(0px)",
                }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { type: "tween", duration: 1.5, ease: "anticipate" }
                }
                style={{ transformOrigin: "right" }}
              >
                <div className="inline-block mt-[20rem] max-md:mt-0">
                  <h2
                    className={`${fonts.mainHeading} text-[color:var(--white-color)]`}
                  >
                    {`<${t.engineer} />`}
                  </h2>
                  <div className={`${fonts.heroSmall} max-md:hidden`}>
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
                        Node.js, Express.js, MongoDB, PostgreSQL
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
          <main className="relative bg-cover bg-center bg-no-repeat p-[12rem] max-md:p-[4rem] max-lg:px-[4rem] max-sm:px-[2rem] h-[100vh] min-h-[80rem] overflow-hidden">
            <motion.div
              className="absolute left-[5rem] bottom-0 inset-0 bg-bottom bg-cover bg-no-repeat scale-[.7] max-lg:hidden"
              initial={{ x: shouldReduceMotion ? 0 : -50 }}
              animate={{ x: 0 }}
              style={{
                backgroundImage: `url(${
                  section === "about" && role
                    ? sope1
                    : section === "experience" && role
                      ? sope2
                      : section === "skills" && role
                        ? sope3
                        : section === "projects" && role
                          ? sope4
                          : undefined
                })`,
                width: "80rem",
                bottom: "-20rem",
                zIndex: "1",
              }}
            />
            {role && (
              <div className="flex max-md:flex-col h-full items-start gap-[4rem]">
                <NavDetailsLinks />
                <div className="block md:hidden">
                  {section === "about" && (
                    <p className="text-[3rem] text-white">{t.about}</p>
                  )}
                  {section === "experience" && (
                    <p className="text-[3rem] text-white">{t.experience}</p>
                  )}
                  {section === "skills" && (
                    <p className="text-[3rem] text-white">{t.skills}</p>
                  )}
                  {section === "projects" && (
                    <p className="text-[3rem] text-white">{t.projects}</p>
                  )}
                </div>
                <section className="flex flex-col border border-white/20 px-[1rem] bg-black/20 rounded-2xl w-[60%] max-md:w-full h-full max-md:flex-1 max-md:min-h-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={section}
                      initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: shouldReduceMotion ? 0 : 100 }}
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : { type: "spring", duration: 0.5, ease: "easeOut" }
                      }
                      className="h-full"
                    >
                      <SimpleBar style={{ maxHeight: "100%" }}>
                        {section === "about" && <AboutSection />}
                        {section === "experience" && <ExperienceSection />}
                        {section === "skills" && <SkillsSection />}
                        {section === "projects" && <ProjectsSection />}
                      </SimpleBar>
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
                  {t.pickSide}
                </p>
              </section>
            ) : undefined}
          </main>
        </div>
      </SimpleBar>
    </RoleContext.Provider>
  );
}

export default App;
