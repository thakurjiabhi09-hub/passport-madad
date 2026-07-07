import { useLangauge } from "../Context/LanguageContext"
import airplane from "../assets/airplane.png";

const content = {
  en: "Passport Madad",
  hi: "पासपोर्ट मदद"
}

function Navbar() {
  const { language, setLanguage } = useLangauge()

  return (
    <nav className="bg-gray-900 px-3 sm:px-8 py-3 sm:py-5 flex justify-between items-center sticky top-0 z-50">

      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        <img
          src="/src/assets/airplane.png" alt="" className="w-15 h-15 mr-4"
        />

        <h1 className="text-yellow-400 font-extrabold italic
                       text-xl sm:text-3xl leading-none">
          {content[language]}
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 sm:gap-6">

        <span className="hidden sm:block text-yellow-400 text-xl font-bold blink">
          {language === "hi"
            ? "भाषा बदलने के लिए क्लिक करें 👉"
            : "Click here to change language 👉"}
        </span>

        <button
          onClick={() => setLanguage("hi")}
          className={`px-2 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold
          ${language === "hi"
            ? "bg-orange-500 text-white"
            : "text-white hover:text-yellow-400"}`}
        >
          हिंदी
        </button>

        <button
          onClick={() => setLanguage("en")}
          className={`px-2 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold
          ${language === "en"
            ? "bg-orange-500 text-white"
            : "text-white hover:text-yellow-400"}`}
        >
          English
        </button>

      </div>

    </nav>
  )
}

export default Navbar
