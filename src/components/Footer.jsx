import { useLanguage } from "../hooks/useLanguage";
import { Github, Linkedin, Send, Heart } from "lucide-react";

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/rshorche", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rshorche",
      label: "LinkedIn",
    },
    { icon: Send, href: "https://t.me/rshorche", label: "Telegram" },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6 text-gray-600 dark:text-gray-400 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm flex items-center gap-1.5">
            <span>&copy; {currentYear} |</span>
            <span className="flex items-center gap-1">
              {language === "fa" ? "ساخته شده با" : "Crafted with"}
              <Heart className="text-red-500" size={16} />
              {language === "fa" ? "توسط" : "by"}
            </span>
            <a
              href="#"
              className="font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {language === "fa" ? " رضا شورچه" : "Reza Shorche"}
            </a>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
