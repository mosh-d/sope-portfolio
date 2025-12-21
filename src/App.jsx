import { useState, useMemo } from "react";
import sope from "./utils/data.js";
import fonts from "./utils/fonts.js";
import { RoleContext } from "./store/role-context.jsx";

// Components
import NavDetailsLinks from "./components/NavDetailsLinks.jsx";
import AboutSection from "./components/sections/AboutSection.jsx";
import ExperienceSection from "./components/sections/ExperienceSection.jsx";
import SkillsSection from "./components/sections/SkillsSection.jsx";

// Icons
import { GrLanguage } from "react-icons/gr";

function App() {
  const [role, setRole] = useState("");
  console.log("Role: ", role);
  const [section, setSection] = useState("about");
  console.log("Section: ", section);
  const [language, setLanguage] = useState("English");
  console.log("Language: ", language);

  const dataIndex = useMemo(() => {
    if (role === "designer") return 0;
    if (role === "engineer") return 1;
    return undefined;
  }, [role]);

  return (
    <RoleContext.Provider
      value={{ role, setRole, dataIndex, section, setSection }}
    >
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
                language === "English" ? "var(--accent-color)" : "transparent",
            }}
          >
            <span className={`${fonts.heroSmall}`}>Eng</span>
          </button>
          <button
            onClick={() => setLanguage("Japanese")}
            className="text-[color:var(--emphasis-color)] cursor-pointer"
            style={{
              backgroundColor:
                language === "Japanese" ? "var(--accent-color)" : "transparent",
            }}
          >
            <span className={`${fonts.heroSmall}`}>日本語</span>
          </button>
        </menu>
      </div>
      <header className="text-[color:var(--black-color)]/50 bg-[color:var(--white-color)] h-[70vh] min-h-[60rem]">
        <h1 className={`${fonts.heroTitle} absolute z-10`}>Sope's Portfolio</h1>
        <div className="flex h-[100%]">
          `{" "}
          <section
            onClick={() => setRole("designer")}
            className="w-[50%] h-[100%] cursor-pointer p-[3rem] flex flex-col justify-center items-center"
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
          </section>
          `
          <section
            onClick={() => setRole("engineer")}
            className="w-[50%] h-[100%] cursor-pointer flex flex-col justify-center items-center p-[3rem] bg-[var(--background-color-2)] text-[color:var(--white-color)]"
          >
            <div className="inline-block mt-[20rem]">
              <h2
                className={`${fonts.mainHeading} text-[color:var(--white-color)]`}
              >{`<Engineer />`}</h2>
              <div>
                <pre>
                  <code>
                    <span className="text-[color:var(--emphasis-color)]">const</span> <span className="text-[color:var(--accent-color)]">SOPE</span> = <span className="text-amber-300">{"{"}</span>
                    <br />
                    &nbsp;&nbsp;<span className="text-[color:var(--text-color)]">frontEnd: 
                      </span><span className="text-[color:var(--emphasis-color)]"> [</span>html5, CSS3, JavaScript, React, Next.js<span className="text-[color:var(--emphasis-color)]">]</span>,
                    <br />
                    &nbsp;&nbsp;<span className="text-[color:var(--text-color)]">backEnd:</span>
                    <span className="text-[color:var(--emphasis-color)]"> [</span>Node.js, Express.js, MongoDb, PostgreSQL<span className="text-[color:var(--emphasis-color)]">]</span>
                    <br />
                    <span className="text-amber-300">{"{"}</span>;
                  </code>
                </pre>
              </div>
            </div>
          </section>
        </div>
      </header>
      <main className="p-[12rem]">
        {role && (
          <div className="flex">
            <NavDetailsLinks />
            <section className="flex justify-center items-center">
              {section === "about" ? (
                <AboutSection />
              ) : section === "experience" ? (
                <ExperienceSection />
              ) : section === "skills" ? (
                <SkillsSection />
              ) : undefined}
            </section>
          </div>
        )}
        {role === "" ? (
          <section className="flex justify-center items-center">
            Pick a side to begin.
          </section>
        ) : undefined}
      </main>
    </RoleContext.Provider>
  );
}

export default App;
