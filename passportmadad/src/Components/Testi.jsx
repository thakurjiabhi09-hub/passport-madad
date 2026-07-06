import { useLangauge } from "../Context/LanguageContext";

const testimonials = {
  en: [
    {
      text: "Not able to login into account but Passport Madad helps me get the access of my account back. Bestest service in cheap rates. Thank you Passport Madad",
      stars: 5,
      name: "Nima Bhandary",
      city: "Mumbai",
      color: "border-orange-400",
    },
    {
      text: "Not able to book RPO Dehradun appointment from last 3 months but Passport Madad book only in one day in cheap rates",
      stars: 5,
      name: "Kabir Bhaat",
      city: "Dehradun",
      color: "border-blue-500",
    },
    {
      text: "Got all the doubts clear regarding Annexure J",
      stars: 4,
      name: "Kaleem",
      city: "Lucknow",
      color: "border-green-500",
    },
    {
      text: "All queries regarding my passport applying of all my family members got resolved by Passport Madad",
      stars: 5,
      name: "thefadedso_ul",
      city: "Lucknow",
      color: "border-purple-500",
    },
    {
      text: "Get my file closed online with the help of Passport Madad. From home file got closed by Passport Madad service",
      stars: 5,
      name: "Manjot Kaur",
      city: "Ludhiana",
      color: "border-teal-500",
    },
    {
      text: "Trusted and best service regarding passport in cheap rates. Fastest response.",
      stars: 5,
      name: "Sachin Chauhan",
      city: "Chandigarh",
      color: "border-pink-500",
    },
  ],

  hi: [
    {
      text: "मैं अपने अकाउंट में लॉग-इन नहीं कर पा रही थी, लेकिन पासपोर्ट मदद ने मुझे मेरे अकाउंट का एक्सेस वापस पाने में मदद की। कम कीमत में सबसे अच्छी सर्विस।",
      stars: 5,
      name: "निमा भंडारी",
      city: "मुंबई",
      color: "border-orange-400",
    },
    {
      text: "पिछले 3 महीनों से RPO देहरादून का अपॉइंटमेंट नहीं मिल रहा था, लेकिन पासपोर्ट मदद ने सिर्फ एक दिन में बुक करवा दिया।",
      stars: 5,
      name: "कबीर भट",
      city: "देहरादून",
      color: "border-blue-500",
    },
    {
      text: "Annexure J से जुड़े सभी संदेह दूर हो गए।",
      stars: 4,
      name: "कलीम",
      city: "लखनऊ",
      color: "border-green-500",
    },
    {
      text: "मेरे पूरे परिवार के पासपोर्ट आवेदन से जुड़े सभी सवालों का जवाब पासपोर्ट मदद ने दिया।",
      stars: 5,
      name: "thefadedso_ul",
      city: "लखनऊ",
      color: "border-purple-500",
    },
    {
      text: "Passport Madad की मदद से घर बैठे फाइल बंद हो गई। बहुत अच्छी सेवा।",
      stars: 5,
      name: "मनजोत कौर",
      city: "लुधियाना",
      color: "border-teal-500",
    },
    {
      text: "पासपोर्ट के लिए सबसे भरोसेमंद और सस्ती सेवा। जवाब भी बहुत जल्दी मिला।",
      stars: 5,
      name: "सचिन चौहान",
      city: "चंडीगढ़",
      color: "border-pink-500",
    },
  ],
};

const TestiLang = {
  en: "Testimonials",
  hi: "प्रशंसापत्र",
};

const Testilang02 = {
  en: "Trusted by Thousands, Recommended by Many",
  hi: "हज़ारों का भरोसा, कई लोगों की पसंद",
};

function Testi() {
  const { language } = useLangauge();

  return (
    <section className="px-4 sm:px-6 lg:px-10 py-12 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900">
          {TestiLang[language]}
        </h2>

        <p className="text-gray-500 mt-3 text-sm sm:text-base">
          {Testilang02[language]}
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials[language].map((t, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-lg border-l-4 ${t.color} p-6 hover:shadow-xl transition`}
          >
            {/* Text */}
            <p className="text-gray-700 leading-7 text-sm sm:text-base break-words">
              "{t.text}"
            </p>

            {/* Stars */}
            <div className="flex gap-1 text-yellow-400 text-lg mt-5 mb-5">
              {[...Array(5)].map((_, i) => (
                <span key={i}>{i < Math.floor(t.stars) ? "★" : "☆"}</span>
              ))}
            </div>

            {/* User */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xl">👤</span>

              <span className="font-bold text-gray-800">
                {t.name}
              </span>

              <span className="text-gray-400">|</span>

              <span className="text-gray-500">
                📍 {t.city}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testi;