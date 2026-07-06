import { useLangauge } from "../Context/LanguageContext"

const features = [
  {
    icon: "🎥",
    en: { title: "Free YouTube Content", desc: "Passport related videos completely free — just for your help" },
    hi: { title: "फ्री यूट्यूब कंटेंट", desc: "पासपोर्ट से जुड़े वीडियो बिल्कुल मुफ्त — सिर्फ आपकी मदद के लिए" }
  },
  {
    icon: "🇮🇳",
    en: { title: "Guidance in Hindi", desc: "Complete guidance in your language — no confusion" },
    hi: { title: "हिंदी में मार्गदर्शन", desc: "पूरी गाइडेंस आपकी भाषा में — कोई भ्रम नहीं" }
  },
  {
    icon: "✅",
    en: { title: "100+ Clients Helped", desc: "Real people, real results — more joining every day" },
    hi: { title: "100+ क्लाइंट्स की मदद", desc: "असली लोग, असली नतीजे — रोज़ नए लोग जुड़ रहे हैं" }
  },
  {
    icon: "💳",
    en: { title: "Payment After Service", desc: "Get the service first, then pay — no risk at all" },
    hi: { title: "सेवा के बाद भुगतान", desc: "पहले सेवा लो, फिर भुगतान करो — कोई जोखिम नहीं" }
  },
]

const stats = {
  en: [
    { number: "1,300+", label: "YouTube Subscribers" },
    { number: "1.5M+", label: "Total Views" },
    { number: "100+", label: "Clients Helped" },
    { number: "500+", label: "Facebook Followers" },
    { number: "50K+", label: "Facebook Views" },
  ],
  hi: [
    { number: "1,300+", label: "यूट्यूब सब्सक्राइबर्स" },
    { number: "1.5M+", label: "कुल व्यूज़" },
    { number: "100+", label: "क्लाइंट्स की मदद" },
    { number: "500+", label: "फेसबुक फॉलोअर्स" },
    { number: "50K+", label: "फेसबुक व्यूज़" },
  ]
}

function WhyChooseUs() {
  const { language } = useLangauge()

  return (
    <div className="bg-gradient-to-r from-olive-700 to-olive-900 px-6 py-12 mt-6">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-white">
          {language === 'hi' ? 'पासपोर्ट मदद क्यों चुनें?' : 'Why Choose Passport Madad?'}
        </h2>
        <p className="text-blue-300 mt-2 text-sm">
          {language === 'hi' ? 'भरोसेमंद मार्गदर्शन, असली नतीजे' : 'Trusted guidance, real results'}
        </p>
      </div>

      {/* Stats Row */}
      <div className="flex justify-center gap-10 mb-12 flex-wrap">
        {stats[language].map((s, index) => (
          <div key={index} className="text-center">
            <p className="text-4xl font-extrabold text-orange-400">{s.number}</p>
            <p className="text-blue-200 text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
        {features.map((f, index) => (
          <div key={index} className="flex items-start gap-4 bg-blue-800 rounded-xl p-5">
            <span className="text-3xl">{f.icon}</span>
            <div>
              <p className="font-bold text-white text-base">{f[language].title}</p>
              <p className="text-blue-300 text-sm mt-1">{f[language].desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default WhyChooseUs