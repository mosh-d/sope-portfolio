import { useContext, useState } from "react";
import { RoleContext } from "../store/role-context.jsx";
import { motion, AnimatePresence } from "motion/react";
import fonts from "../utils/fonts.js";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export default function MobileMenu() {
  const { section, setSection } = useContext(RoleContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
    ["about", "ABOUT"],
    ["experience", "EXPERIENCE"],
    ["skills", "SKILLS"],
    ["projects", "PROJECTS"],
  ];

  return (
    <div className="hidden max-md:block">
      <button onClick={toggleMenu} className="p-2 z-50 relative">
        <RxHamburgerMenu size="3.5rem" color="var(--accent-color)" />
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
              onClick={toggleMenu}
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
                    onClick={() => {
                      setSection(key);
                      setIsOpen(false);
                    }}
                    className="cursor-pointer"
                  >
                    <span
                      className={`${fonts.mainHeading}`}
                      style={{
                        color:
                          section === key
                            ? "var(--emphasis-color)"
                            : "var(--white-color)",
                      }}
                    >
                      {label}
                    </span>
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
