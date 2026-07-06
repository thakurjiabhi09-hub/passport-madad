import { useLangauge } from "../Context/LanguageContext"


  const content = {
   en: ' ⚠️ Important Notice — Passport Madad provides guidance and information only. We offer no guarantees. The final decision rests with the government official.',
   hi: '⚠️ ज़रूरी सूचना — पासपोर्ट हेल्प सिर्फ़ मार्गदर्शन और जानकारी देती है। हम कोई गारंटी नहीं देते। अंतिम फ़ैसला सरकारी अधिकारी का होता है।'
  }

function Discalmer() {

  const {language} = useLangauge()

  return (
    <div className="sticky top-0 z-50 bg-yellow-50 border-l-4 border-red-500 p-4 text-center">
        <p className="text-red-800 font-bold text-sm">
         {content[language]}
     
      </p>
     
    </div>
  )
}

export default Discalmer