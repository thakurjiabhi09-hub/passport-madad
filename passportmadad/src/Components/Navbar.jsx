import { useLangauge } from "../Context/LanguageContext"

const content = {
  en: ' Passport Madad',
  hi: ' पासपोर्ट मदद'
}

function Navbar() {
  const { language, setLanguage } = useLangauge()

  return (
<nav className="bg-gray-900 px-8 py-5 flex justify-between items-center shadow-2xl sticky top-0 z-50">
      
      {/* Logo */}
<div className="text-yellow-400 font-extrabold text-3xl tracking-widest drop-shadow-lg italic font-sans flex items-center">
  <img src="/src/assets/airplane.png" alt="" className="w-15 h-15 mr-4" />
  {content[language]}
</div>

      {/* Right side */}
      <div className="flex items-center gap-6">

        {/* YouTube link */}
     <span className="text-yellow-400 text-xl font-bold blink">
  {language === 'hi' ? 'भाषा बदलने के लिए क्लिक करें 👉' : 'Click here to change language 👉'}
</span>

        {/* Language Toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => setLanguage('hi')}
            className={`px-4 py-1.5 text-sm font-bold rounded-full transition cursor-pointer
              ${language === 'hi'
                ? 'bg-orange-500 text-white'
                : 'text-white hover:text-yellow-400'
              }`}
          >
            हिंदी
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-4 py-1.5 text-sm font-bold rounded-full transition cursor-pointer
              ${language === 'en'
                ? 'bg-orange-500 text-white'
                : 'text-white hover:text-yellow-400'
              }`}
          >
            English
          </button>
        </div>

      </div>

    </nav>
  )
}

export default Navbar