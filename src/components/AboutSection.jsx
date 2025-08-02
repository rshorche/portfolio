import { useLanguage } from "../hooks/useLanguage";
import { Code2, Palette, Rocket, Award, Briefcase } from "lucide-react";

const AboutSection = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: Code2,
      title: language === "fa" ? "کد تمیز" : "Clean Code",
      description:
        language === "fa"
          ? "نوشتن کد قابل نگهداری و بهینه."
          : "Writing maintainable and optimized code.",
    },
    {
      icon: Palette,
      title: language === "fa" ? "طراحی زیبا" : "Beautiful Design",
      description:
        language === "fa"
          ? "ایجاد رابط‌های کاربری جذاب و کاربردی."
          : "Creating attractive and functional user interfaces.",
    },
    {
      icon: Rocket,
      title: language === "fa" ? "عملکرد بالا" : "High Performance",
      description:
        language === "fa"
          ? "بهینه‌سازی سرعت و تجربه کاربری."
          : "Optimizing speed and user experience.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {language === "fa" ? "درباره من" : "About Me"}
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {language === "fa"
                  ? "من یک توسعه‌دهنده فرانت‌اند با علاقه هستم که تخصص در React و تکنولوژی‌های مدرن وب دارم. عاشق ایجاد رابط‌های کاربری شهودی و زنده کردن طراحی‌ها هستم."
                  : "I am a passionate frontend developer with expertise in React and modern web technologies. I love creating intuitive user interfaces and bringing designs to life."}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {language === "fa"
                  ? "با تجربه در ساخت وب‌سایت‌های واکنش‌گرا و اپلیکیشن‌های تک‌صفحه‌ای، همیشه به دنبال یادگیری تکنولوژی‌های جدید و بهبود مهارت‌هایم هستم."
                  : "With experience in building responsive websites and single-page applications, I am always seeking to learn new technologies and improve my skills."}
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row gap-4">
              <div className="flex-1 flex items-center justify-center gap-3 p-3 bg-gray-100 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600">
                <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  {language === "fa" ? "+۳ سال تجربه" : "+3 Years Experience"}
                </span>
              </div>
              <a
                href="https://www.coursera.org/account/accomplishments/verify/3BKYC4LTGHZV"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 p-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-bold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Award className="w-6 h-6 flex-shrink-0" />
                <span>
                  {language === "fa"
                    ? "گواهینامه Johns Hopkins"
                    : "Johns Hopkins Certificate"}
                </span>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center">
                  <feature.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
