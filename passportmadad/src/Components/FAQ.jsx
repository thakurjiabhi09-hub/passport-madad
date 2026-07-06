import { useState } from 'react'
import { useLangauge } from '../Context/LanguageContext'

const faqs = [
  {
    en: {
      question: "Do you provide any guarantee?",
      answer: "No, we only provide correct guidance and information. Final decision rests with the government authority."
    },
    hi: {
      question: "क्या आप कोई गारंटी देते हैं?",
      answer: "नहीं, हम केवल सही मार्गदर्शन और जानकारी देते हैं। अंतिम निर्णय सरकारी अधिकारी का होता है।"
    }
  },
  {
    en: {
      question: "What are your charges?",
      answer: "Charges depend on your query and will be discussed on the call."
    },
    hi: {
      question: "आपके शुल्क कितने हैं?",
      answer: "शुल्क आपकी सवाल के हिसाब से तय होते हैं — फोन कॉल पर चर्चा किया जाएगा।"
    }
  },
  {
    en: {
      question: "Will I get a refund?",
      answer: "No, we do not provide refunds."
    },
    hi: {
      question: "क्या धनवापसी मिलेगा?",
      answer: "नहीं, हम धनवापसी नहीं देते।"
    }
  }
]

function FAQ() {
  const { language } = useLangauge()
  const [open, setOpen] = useState(null)

  return (
    <div className=" bg-white px-6 py-10 max-w-3xl mx-auto mb-5">

      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-blue-900">
          {language === 'hi' ? 'अक्सर पूछे जाने वाले सवाल' : 'Frequently Asked Questions'}
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-sm">
            
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full text-left px-6 py-4 font-bold text-gray-800 flex justify-between items-center"
            >
              {faq[language].question}
              <span>{open === index ? '▲' : '▼'}</span>
            </button>

            {open === index && (
              <div className="px-6 py-4 text-gray-600 text-sm border-t border-gray-100">
                {faq[language].answer}
              </div>
            )}

          </div>
        ))}
      </div>

    </div>
  )
}

export default FAQ