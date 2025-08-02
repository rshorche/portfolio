import { useLanguage } from "../hooks/useLanguage";
import {
  Code,
  GitMerge,
  Server,
  Cog,
  Wind,
  Tv,
  CheckCircle2,
  MoveRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const SkillsSection = () => {
  const { language } = useLanguage();

  const coreSkills = [
    { name: "React", icon: Code },
    { name: "JavaScript (ES6+)", icon: Code },
    { name: "HTML5 & CSS3", icon: Tv },
    { name: "Tailwind CSS", icon: Wind },
  ];

  const tools = [
    { name: "Vite", icon: Cog },
    { name: "Git & GitHub", icon: GitMerge },
    { name: "REST APIs", icon: Server },
    { name: "Responsive Design", icon: MoveRight },
  ];

  const otherTech = [
    "npm",
    "swiper",
    "Chart.js",
    "Context API",
    "Yup",
    "React Router",
    "REST API ",
    "Axios",
    "Formik",
    "npm",
    "swiper",
    "Chart.js",
    "Context API",
    "Yup",
    "React Router",
    "REST API ",
    "Axios",
    "Formik",
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {language === "fa" ? "جعبه ابزار فنی" : "Technical Toolbox"}
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              {language === "fa" ? "مهارت‌های اصلی" : "Core Skills"}
            </h3>
            <div className="space-y-4">
              {coreSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 bg-white dark:bg-gray-700/50 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <skill.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    {skill.name}
                  </span>
                  <div className="flex-grow h-1 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              {language === "fa" ? "ابزارها" : "Tools"}
            </h3>
            <div className="space-y-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 bg-white dark:bg-gray-700/50 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <tool.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="relative w-full bg-gray-100 dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700 py-4 overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={60}
              slidesPerView="auto"
              loop={true}
              speed={4000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              className="w-full"
            >
              {otherTech.map((tech, index) => (
                <SwiperSlide key={index} className="!w-auto">
                  <span className="text-lg font-semibold text-gray-600 dark:text-gray-400 whitespace-nowrap">
                    {tech}
                  </span>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
