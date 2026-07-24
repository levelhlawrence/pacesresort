import { useEffect, useRef, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import PacesLogo from "../Images/Paces+White_logo.png";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { hash } = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!toggleMenu) return;

    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setToggleMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [toggleMenu]);
  const [activeSection, setActiveSection] = useState(
    () => (hash ? hash.replace("#", "") : "home") || "home",
  );

  const menuItems = [
    { label: "Home", hash: "#home", section: "home" },
    { label: "About", hash: "#about", section: "about" },
    { label: "Gallery", hash: "#gallery", section: "gallery" },
  ];

  useEffect(() => {
    const sectionIds = ["home", "about", "gallery", "contact"];
    const getCurrentSection = () => {
      const midViewport = window.innerHeight * 0.3;
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        if (rect.top <= midViewport && rect.bottom > midViewport) {
          return id;
        }
      }

      const scrollBottom = window.innerHeight + window.scrollY;
      if (scrollBottom >= document.documentElement.scrollHeight - 80) {
        return "contact";
      }

      return "home";
    };

    const updateActiveSection = () => {
      const current = getCurrentSection();
      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const nextSection = hash.replace("#", "") || "home";
    if (["home", "about", "gallery", "contact"].includes(nextSection)) {
      setActiveSection(nextSection);
    }
  }, [hash]);

  const isActive = (section) => activeSection === section;

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          smooth
          to="#home"
          className="flex items-center gap-3"
          aria-label="Go to home section"
        >
          <img
            src={PacesLogo}
            alt="Paces Worldwide logo"
            className="h-10 w-auto"
          />
        </Link>

        <button
          type="button"
          className="rounded-full border border-white/20 p-2 text-white transition hover:bg-white/10 md:hidden"
          onClick={() => setToggleMenu((value) => !value)}
          aria-expanded={toggleMenu}
          aria-controls="site-navigation"
          aria-label="Toggle navigation"
        >
          {toggleMenu ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>

        <nav
          id="site-navigation"
          className="hidden items-center gap-2 md:flex"
          aria-label="Primary navigation"
        >
          {menuItems.map((item) => (
            <Link
              key={item.hash}
              smooth
              to={item.hash}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive(item.section)
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-200 hover:bg-white/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            smooth
            to="#contact"
            className={`rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] transition ${
              isActive("contact")
                ? "bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20"
                : "bg-amber-500/90 text-white hover:bg-amber-400"
            }`}
          >
            Book a Stay
          </Link>
        </nav>
      </div>

      {toggleMenu && (
        <div className="border-t border-white/10 bg-slate-900/80 px-4 py-4 backdrop-blur md:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {menuItems.map((item) => (
              <Link
                key={item.hash}
                smooth
                to={item.hash}
                className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                  isActive(item.section)
                    ? "bg-white text-slate-900"
                    : "bg-white/10 text-white"
                }`}
                onClick={() => setToggleMenu(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              smooth
              to="#contact"
              className={`rounded-2xl px-4 py-3 text-sm font-semibold ${
                isActive("contact")
                  ? "bg-amber-400 text-slate-950"
                  : "bg-amber-500/90 text-white"
              }`}
              onClick={() => setToggleMenu(false)}
            >
              Book a Stay
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Nav;
