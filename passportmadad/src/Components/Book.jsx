import React from 'react'
import { useLangauge } from '../Context/LanguageContext'

function Book() {
   
     const {language} = useLangauge()

    return (
      <>
       <div className='w-full px-10 py-32 mb-8 bg-gradient-to-r from-olive-700 to-olive-900 flex flex-col items-center'>
            <h1 className=' font-extrabold font-sans text-olive-50 text-5xl mb-4'>
            {language === 'hi' ? 'पासपोर्ट में कोई भी दिक्कत?' : 'Any Passport Problem?'}
            </h1>
            <h3  className=' font-extrabold font-sans text-olive-50 text-2xl mb-10'>
             {language === 'hi' ? 'हम हैं आपकी मदद के लिए' : 'We Are Here To Help You'}
            </h3>
            <p  className='font-sans text-olive-50 text-l mb-4'>
              {language === 'hi' ? 'पासपोर्ट बनवाने की प्रक्रिया में आपकी मदद के लिए हम 24/7 उपलब्ध हैं।' : 'We are available 24/7 to help you with your Passport journey.'}
            </p>
            <a href="https://calendly.com/mysteriousman736/30min"
            target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-900 font-bold px-8 py-3 rounded-full hover:opacity-90 transition">
          {language === 'hi' ? 'बुक परामर्श' : 'Book Consultation'}

            </a>
        </div>

        <div className="bg-gradient-to-r from-olive-700 to-olive-900 text-center py-8">
      <p className="text-white text-sm">
        © 2025 Passport Madad. All Rights Reserved.
      </p>
      <p className="text-white text-xs mt-2">
        This website is made by Abhishek Thakur
      </p>
      <p className="text-white text-xs mt-1">
        📧 mysteriousman736@gmail.com

      </p>
    </div>
      </>
       
    )
}

export default Book
