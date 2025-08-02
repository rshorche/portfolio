import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../hooks/useLanguage";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const { language } = useLanguage();
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  // این تابع مسئول ارسال اطلاعات فرم به حساب EmailJS شماست
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // شناسه‌های واقعی خود را که از سایت EmailJS گرفته‌اید، اینجا قرار دهید
    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert(
            language === "fa"
              ? "پیام شما با موفقیت ارسال شد!"
              : "Your message has been sent successfully!"
          );
          form.current.reset(); // خالی کردن فرم بعد از ارسال موفق
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert(
            language === "fa"
              ? "خطا در ارسال پیام. لطفاً دوباره تلاش کنید."
              : "Failed to send the message. Please try again."
          );
        }
      )
      .finally(() => {
        setIsSending(false); // بازگرداندن دکمه به حالت اولیه
      });
  };

  // اطلاعات تماس شما
  const contactInfo = [
    {
      icon: Mail,
      label: language === "fa" ? "ایمیل" : "Email",
      value: "rshorche@gmail.com",
    },
    {
      icon: Phone,
      label: language === "fa" ? "تلفن" : "Phone",
      value: "09377457370",
    },
    {
      icon: MapPin,
      label: language === "fa" ? "موقعیت" : "Location",
      value: language === "fa" ? "ایران" : "Iran",
    },
  ];

  // محتوای بخش "چرا با من کار کنید؟"
  const whyWorkWithMe = {
    title: language === "fa" ? "چرا با من کار کنید؟" : "Why Work With Me?",
    points: [
      {
        text: language === "fa" ? "پاسخگویی سریع" : "Quick Response",
        color: "bg-yellow-400",
      },
      {
        text: language === "fa" ? "کیفیت بالا" : "High Quality",
        color: "bg-teal-400",
      },
      {
        text: language === "fa" ? "قیمت منصفانه" : "Fair Pricing",
        color: "bg-blue-400",
      },
      {
        text: language === "fa" ? "پشتیبانی کامل" : "Full Support",
        color: "bg-sky-400",
      },
    ],
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {language === "fa" ? "ارتباط برقرار کنید" : "Get In Touch"}
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* این گرید اصلی است که دو ستون را در کنار هم قرار می‌دهد */}
        <div className="grid md:grid-cols-2 gap-12 md:items-start">
          {/* ستون سمت راست: شامل اطلاعات تماس و بخش "چرا با من کار کنید؟" */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center">
                  <info.icon className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">
                    {info.label}
                  </p>
                  <p className="font-semibold text-gray-800 dark:text-gray-200">
                    {info.value}
                  </p>
                </div>
              </div>
            ))}

            <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                {whyWorkWithMe.title}
              </h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                {whyWorkWithMe.points.map((point, index) => (
                  <li key={index} className="flex items-center">
                    <div
                      className={`w-2 h-2 ${point.color} rounded-full mr-3 rtl:ml-3 rtl:mr-0`}
                    ></div>
                    {point.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ستون سمت چپ: فرم تماس */}
          <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-3 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder={language === "fa" ? "نام" : "Name"}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-3 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder={language === "fa" ? "ایمیل" : "Email"}
                />
              </div>
              <div>
                <textarea
                  rows="4"
                  name="message"
                  required
                  className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-3 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                  placeholder={
                    language === "fa" ? "پیام شما..." : "Your Message..."
                  }
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-all disabled:opacity-50"
              >
                <Send size={20} />
                <span>
                  {isSending
                    ? language === "fa"
                      ? "در حال ارسال..."
                      : "Sending..."
                    : language === "fa"
                    ? "ارسال پیام"
                    : "Send Message"}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
