import { useContext, useState } from "react";
import { RoleContext } from "../store/role-context.jsx";
import { motion, AnimatePresence } from "motion/react";
import translations from "../utils/translations.js";
import fonts from "../utils/fonts.js";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export default function MobileMenu() {
  const { section, setSection, language } = useContext(RoleContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Get translations based on language
  const t = language === "Japanese" ? translations.ja : translations.en;

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const navItems = [
    ["projects", t.projects],
    ["experience", t.experience],
    ["skills", t.skills],
    ["about", t.about],
  ];

  return (
    <div className="hidden max-md:block">
      <button
        type="button"
        onClick={toggleMenu}
        aria-label="Open menu"
        aria-expanded={isOpen}
        className="p-2 z-50 relative"
      >
        <RxHamburgerMenu size="4.5rem" color="var(--emphasis-color)" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-[var(--background-color)] z-[100] flex flex-col items-center justify-center"
          >
            <button
              type="button"
              onClick={toggleMenu}
              aria-label="Close menu"
              className="absolute top-10 right-10 p-2"
            >
              <IoClose size="4.5rem" color="var(--emphasis-color)" />
            </button>

            <nav>
              <ul className="flex flex-col gap-[4rem] items-center">
                {navItems.map(([key, label]) => (
                  <motion.li
                    key={key}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setSection(key);
                        setIsOpen(false);
                      }}
                      aria-current={section === key}
                      className={`${fonts.mainContent} text-[2.4rem] cursor-pointer`}
                      style={{
                        color:
                          section === key
                            ? "var(--emphasis-color)"
                            : "var(--white-color)",
                      }}
                    >
                      {label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
