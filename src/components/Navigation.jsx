import { useState, useEffect, useMemo } from "react";
import { Moon, Sun, Globe, Menu, X } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { useTheme } from "../hooks/useTheme";

const Navigation = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = useMemo(
    () => [
      {
        key: "hero",
        href: "#hero",
        title: language === "fa" ? "خانه" : "Home",
      },
      {
        key: "about",
        href: "#about",
        title: language === "fa" ? "درباره من" : "About",
      },
      {
        key: "skills",
        href: "#skills",
        title: language === "fa" ? "مهارت‌ها" : "Skills",
      },
      {
        key: "projects",
        href: "#projects",
        title: language === "fa" ? "پروژه‌ها" : "Projects",
      },
      {
        key: "contact",
        href: "#contact",
        title: language === "fa" ? "تماس" : "Contact",
      },
    ],
    [language]
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      navItems.forEach((item) => {
        const element = document.querySelector(item.href);
        if (element) observer.unobserve(element);
      });
    };
  }, [navItems]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ? "shadow-md bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700"
      : "bg-transparent"
  }`;

  const textClasses = `transition-colors duration-300 ${
    isScrolled && theme === "light"
      ? "text-gray-800"
      : "text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]"
  }`;

  const buttonClasses =
    "p-2 rounded-full transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/10 active:scale-95";

  return (
    <nav className={navClasses}>
      <div
        className={`container mx-auto flex justify-between items-center p-4 ${textClasses}`}
      >
        <div className="font-bold text-xl">
          {language === "fa" ? "پورتفولیو" : "Portfolio"}
        </div>
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`relative font-medium link-underline pb-1 ${
                activeSection === item.key
                  ? "text-blue-600 dark:text-blue-400 after:w-full after:left-0"
                  : "hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {item.title}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className={buttonClasses}>
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={toggleLanguage}
            className={`${buttonClasses} flex items-center gap-1`}
          >
            <Globe size={20} />
            <span>{language === "en" ? "فا" : "EN"}</span>
          </button>
          <button
            className={`md:hidden ${buttonClasses}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <div
        className={`transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        } overflow-hidden`}
      >
        <div
          className={`p-4 pt-0 backdrop-blur-lg ${
            theme === "light"
              ? "bg-white/90 text-gray-800"
              : "bg-gray-800/90 text-white"
          }`}
        >
          <div className="flex flex-col items-start gap-4 pt-4 border-t border-gray-300 dark:border-gray-700">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="hover:text-blue-600 dark:hover:text-blue-400 w-full text-right"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
