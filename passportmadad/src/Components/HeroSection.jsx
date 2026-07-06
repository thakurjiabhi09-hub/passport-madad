import React from 'react'
import { useLangauge } from '../Context/LanguageContext'
 
const img ={
    en: ' ———  OUR SIMPLE PROCESS  ———',
    hi: '———  हमारी आसान प्रक्रिया  ———'
}

const pic = {
    en: '/assets/english.png',
    hi: '/assets/hindi.png'
}

function HeroSection() {
       
       const {language} = useLangauge()
  
    return (
        <div className="px-6 py-10 flex flex-col items-center bg-gradient-to-r from-olive-700 to-olive-900">
           <h2 className="text-yellow-300 font-bold text-4xl mb-6 text-center">
               {img[language]}
            </h2>
            <div className="w-full max-w-8xl border-2 border-blue-700 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.15)]">
                <img 
                    src={pic[language]} 
                    alt="Our Simple Process" 
                    className="w-full h-auto object-cover"
                />
            </div>

        </div>
    )
}

export default HeroSection
