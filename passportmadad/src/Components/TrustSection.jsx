import React from "react"
import { useLangauge } from "../Context/LanguageContext"

    const lang01 = {
        en: 'Note: Payment After Service',
          hi: 'नोट: सेवा के बाद भुगतान',
        
    } 

    const lang02 = {
          en: 'You dont pay before the service 100% satisfaction first',
          hi: 'आपको सर्विस से पहले पेमेंट नहीं करना है, पहले 100% संतुष्टि मिलेगी।',
    }

    const lang03 = {
      en: 'Trusted by',
      hi: 'इनका भरोसा',
    }

    const lang04 = {
      en: '100+ Members',
      hi: '100 से ज़्यादा सदस्य'
    }



function TrustSection() {


    const {language} = useLangauge()


    return (
        <div className="flex justify-center py-4 px-6">
            <div className="flex items-center justify-between w-full bg-red-50 border border-orange-200 rounded-xl px-16 py-5 shadow-sm">
                
                {/* Left */}
                <div className="flex items-center gap-4">
                    <span className="text-3xl">🛡️</span>
                    <div>
                        <p className="font-bold text-gray-700 text-base">{lang01[language]}</p>
                        <p className="text-gray-500 text-sm">{lang02[language]}</p>
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4">
                    <span className="text-3xl">✅</span>
                    <div>
                        <p className="font-bold text-gray-700 text-base">{lang03[language]}</p>
                        <p className="text-gray-500 text-sm">{lang04[language]}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TrustSection