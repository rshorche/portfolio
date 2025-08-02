import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import heroBackground from "../assets/hero-background.webp";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const { language } = useLanguage();
  const parallaxRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${
          window.pageYOffset * 0.4
        }px)`;
      }
      setIsAtTop(window.pageYOffset < 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        ref={parallaxRef}
        className="absolute top-0 left-0 w-full h-[120%]"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/50 to-blue-900/40 dark:from-gray-800/50 dark:to-blue-950/60" />
      </div>

      <div
        className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent transition-opacity duration-300 pointer-events-none ${
          isAtTop ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div style={{ animation: "fadeIn 0.8s ease-out forwards" }}>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{
              animation: "slideUp 0.8s ease-out 0.2s forwards",
              opacity: 0,
            }}
          >
            {language === "fa" ? "توسعه‌دهنده فرانت‌اند" : "Frontend Developer"}
          </h1>
          <p
            className="text-lg text-white/80 mb-12 max-w-2xl mx-auto"
            style={{
              animation: "slideUp 0.8s ease-out 0.4s forwards",
              opacity: 0,
            }}
          >
            {language === "fa"
              ? "من اپلیکیشن‌های وب مدرن و واکنش‌گرا با توجه به جزئیات و تجربه کاربری می‌سازم."
              : "I create modern, responsive web applications with attention to detail."}
          </p>

          <div
            className="flex gap-4 justify-center"
            style={{
              animation: "slideUp 0.8s ease-out 0.6s forwards",
              opacity: 0,
            }}
          >
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all"
            >
              {language === "fa" ? "مشاهده کارها" : "View Work"}
            </a>
            <a
              href="#contact"
              className="border border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm font-bold py-3 px-6 rounded-lg transition-all"
            >
              {language === "fa" ? "تماس با من" : "Contact Me"}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;
