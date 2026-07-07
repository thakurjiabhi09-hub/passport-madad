import React from "react";
import { useLangauge } from "../Context/LanguageContext";

import englishImg from "../assets/english.png";
import hindiImg from "../assets/hindi.png";

const img = {
  en: "— OUR SIMPLE PROCESS —",
  hi: "——— हमारी आसान प्रक्रिया ———",
};

const pic = {
  en: '/src/assets/english.png',
  hi: '/src/assets/hindi.png'
};

function HeroSection() {
  const { language } = useLangauge();

  return (
    <section className="w-full bg-gradient-to-r from-olive-700 to-olive-900 py-8 md:py-12 px-4 sm:px-6">
      
      <h2 className="text-center text-yellow-300 font-bold text-2xl sm:text-3xl md:text-4xl mb-6">
        {img[language]}
      </h2>

      <div className="mx-auto w-full max-w-6xl rounded-xl border-2 border-blue-700 overflow-hidden shadow-lg">
        <img
          src={pic[language]}
          alt="Our Simple Process"
          className="block w-full h-auto"
        />
      </div>

    </section>
  );
}

export default HeroSection;