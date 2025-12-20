import { useState, useMemo } from "react";
import sope from "./utils/data.js";
import fonts from "./utils/fonts.js";
import { RoleContext } from "./store/role-context.jsx";

// Components
import NavDetailsLinks from "./components/NavDetailsLinks.jsx";
import AboutSection from "./components/sections/AboutSection.jsx";
import ExperienceSection from "./components/sections/ExperienceSection.jsx"

// Icons
import { GrLanguage } from "react-icons/gr";

function App() {
  const [role, setRole] = useState("");
  console.log("Role: ", role)
  const [section, setSection] = useState("about");
  console.log("Section: ", section);
  const [language, setLanguage] = useState("English");
  console.log("Language: ", language)

  const dataIndex = useMemo(() => {
    if (role === "designer") return 0;
    if (role === "engineer") return 1;
    return undefined;
  }, [role]);

  return (
    <RoleContext.Provider value={{ role, setRole, dataIndex, section, setSection }}>
      <div
        data-component="Language selector"
        className="flex absolute m-[1rem] gap-[1rem] items-end z-20"
      >
        <GrLanguage color="var(--emphasis-color)" size="1.5rem" />
        <menu className="flex gap-[.5rem]">
          <button
            onClick={() => setLanguage("English")}
            className="text-[color:var(--emphasis-color)] cursor-pointer"
            style={{
              backgroundColor:
                language === "English" ? "var(--accent-color)" : "transparent",
            }}
          >
            Eng
          </button>
          <button
            onClick={() => setLanguage("Japanese")}
            className="text-[color:var(--emphasis-color)] cursor-pointer"
            style={{
              backgroundColor:
                language === "Japanese" ? "var(--accent-color)" : "transparent",
            }}
          >
            日本語
          </button>
        </menu>
      </div>
      <header className="text-[color:var(--black-color)]/50 bg-[color:var(--white-color)] h-[40rem]">
        <h1 className={`${fonts.heroTitle} absolute z-10`}>Sope's Portfolio</h1>
        <div className="flex h-[100%]">
          <section
            onClick={() => setRole("designer")}
            className="w-[50%] h-[100%] cursor-pointer p-[3rem] flex flex-col justify-center items-center"
          >
            <h2>designer</h2>
          </section>
          <section
            onClick={() => setRole("engineer")}
            className="w-[50%] h-[100%] cursor-pointer flex flex-col justify-center items-center p-[3rem] bg-[var(--background-color-2)] text-[color:var(--white-color)]"
          >
            <h2>engineer</h2>
          </section>
        </div>
      </header>
      <main className="p-[12rem]">
        {role && (
          <div className="flex">
            <NavDetailsLinks />
            <section className="flex justify-center items-center">
              {
                section === "about" ?
                <AboutSection /> :
                section === "experience" ?
                <ExperienceSection /> :
                undefined
              }
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
