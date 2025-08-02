import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { Github, ExternalLink, X } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import digitalCurrencyImg1 from "../assets/DigitalCurrency1.webp";
import digitalCurrencyImg2 from "../assets/DigitalCurrency2.webp";
import restaurantImg1 from "../assets/restaurant1.webp";
import restaurantImg2 from "../assets/restaurant2.webp";
import plantsImg1 from "../assets/plants1.webp";
import plantsImg2 from "../assets/plants2.webp";
import rahbord3601 from "../assets/rahbord3601.webp";
import rahbord3602 from "../assets/rahbord3602.webp";

const ProjectsSection = () => {
  const { language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: language === "fa" ? "ارز دیجیتال" : "Crypto Price",
      description:
        language === "fa"
          ? "یک داشبورد لحظه‌ای برای رصد قیمت ارزهای دیجیتال، ساخته شده با جاوااسکریپت خالص برای درک عمیق‌تر از DOM و اتصال به API."
          : "A real-time dashboard for monitoring digital currency prices, built with vanilla JavaScript to gain a deeper understanding of the DOM and API integration.",
      imageUrls: [digitalCurrencyImg1, digitalCurrencyImg2],
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Chart.js",
        "Swiper.js",
        "API (CryptoCompare)",
      ],
      githubUrl: "https://github.com/rshorche/Digitalcurrency",
      demoUrl: "https://digitalcurrency.vercel.app/",
      rotation: "-rotate-2",
    },
    {
      title:
        language === "fa"
          ? "وب‌سایت رستوران Delizioso"
          : "Delizioso Restaurant Website",
      description:
        language === "fa"
          ? "یک وب‌سایت جامع رستوران ساخته شده با React، شامل صفحات اصلی، منو، درباره ما، رزرو آنلاین، و تماس با ما. این پروژه دارای سیستم مدیریت منو با دسته‌بندی‌ها، نمایش جزئیات غذاها با امتیاز ستاره‌ای و امکان رزرو میز است. همچنین، از Tailwind CSS برای طراحی واکنش‌گرا و فراخوانی API برای مدیریت داده‌های منو و سرآشپزها استفاده می‌کند."
          : "A comprehensive restaurant website built with React, including home, menu, about, online order, and contact pages. It features a menu management system with categories, star ratings, and table reservation. It also uses Tailwind CSS for responsive design and API calls for menu and chef data.",
      imageUrls: [restaurantImg1, restaurantImg2],
      tech: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "React Router DOM",
        "API Integration",
      ],
      githubUrl: "https://github.com/rshorche/restaurant",
      demoUrl: "https://restaurant-three-kappa.vercel.app/",
      rotation: "rotate-1",
    },
    {
      title:
        language === "fa"
          ? "فروشگاه آنلاین گیاهان (گلدون)"
          : "Online Plant Shop (Goldoon)",
      description:
        language === "fa"
          ? "یک پلتفرم تجارت الکترونیک و مدیریت محتوا برای فروش گیاهان و ارائه خدمات مرتبط. این پروژه با استفاده از React، Redux و Tailwind CSS توسعه یافته و از Supabase به عنوان بک‌اند استفاده می‌کند."
          : "An e-commerce and content management platform for selling plants and related services. Developed with React, Redux, and Tailwind CSS, it utilizes Supabase as a backend.",
      imageUrls: [plantsImg1, plantsImg2],
      tech: [
        "React.js",
        "Redux Toolkit",
        "JavaScript",
        "Tailwind CSS",
        "React Router DOM",
        "Supabase",
        "TinyMCE",
      ],
      githubUrl: "https://github.com/rshorche/Plant-Shop",
      demoUrl: "https://plant-shop-beta-ten.vercel.app/",
      rotation: "rotate-3",
    },
    {
      title: language === "fa" ? "راهبرد ۳۶۰" : "Rahbord 360",
      description:
        language === "fa"
          ? "یک پلتفرم فرانت‌اند جامع برای مدیریت استراتژی‌های مالی و پورتفولیو، شامل داشبورد تحلیلی، ردیابی معاملات سهام و ابزارهای تخصصی برای آپشن و Covered Call. این پروژه با React، Vite و Tailwind CSS توسعه یافته و از Zustand برای مدیریت وضعیت و Supabase به عنوان سرویس بک‌اند بهره می‌برد."
          : "A comprehensive frontend platform for financial strategy and portfolio management, including an analytical dashboard, stock transaction tracking, and specialized tools for options and Covered Calls. Developed with React, Vite, and Tailwind CSS, it utilizes Zustand for state management and Supabase as a backend service.",
      imageUrls: [rahbord3601, rahbord3602],
      tech: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Zustand",
        "React Hook Form",
        "Yup",
        "Supabase",
        "AG-Grid",
        "Chart.js",
      ],
      githubUrl: "https://github.com/rshorche/Rahbord360",
      demoUrl: "https://rahbord360.vercel.app/",
      rotation: "-rotate-1",
    },
  ];

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section
      id="projects"
      className="py-20 bg-gray-100 dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {language === "fa" ? "پروژه‌های منتخب" : "Featured Projects"}
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => openModal(project)}
              className={`group transition-all duration-300 ease-in-out hover:scale-110 hover:!rotate-0 hover:z-10 cursor-pointer ${project.rotation}`}
            >
              <div className="bg-white dark:bg-gray-50 p-4 pb-6 rounded-md shadow-lg hover:shadow-2xl transition-shadow">
                <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <img
                    src={project.imageUrls[0]}
                    alt={project.title}
                    className="w-full h-full object-contain" 
                  />
                </div>
                <div className="text-center pt-4">
                  <h3
                    className="text-2xl text-gray-800"
                    style={{ fontFamily: "Caveat, cursive" }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "modal-in 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors z-20"
            >
              <X size={24} />
            </button>

            <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-100 dark:bg-gray-900">
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                className="w-full h-full"
              >
                {selectedProject.imageUrls.map((url, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-full flex items-center justify-center p-4">
                      <img
                        src={url}
                        alt={`${selectedProject.title} - slide ${index + 1}`}
                        className="max-w-full max-h-full object-contain" 
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="p-8 flex flex-col overflow-y-auto">
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                {selectedProject.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow max-w-96">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-500/10 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto border-t border-gray-200 dark:border-gray-700 pt-6">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-all duration-300 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 py-3 rounded-lg"
                >
                  <Github size={18} />
                  <span>{language === "fa" ? "مشاهده کد" : "View Code"}</span>
                </a>
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
                >
                  <ExternalLink size={18} />
                  <span>{language === "fa" ? "دموی زنده" : "Live Demo"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
