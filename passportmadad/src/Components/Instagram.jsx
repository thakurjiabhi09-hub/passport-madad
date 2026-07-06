import { useLangauge } from "../Context/LanguageContext"

function Instagram() {
  const { language } = useLangauge()

  return (
<div className="bg-gradient-to-r from-olive-700 to-olive-900 flex flex-col md:flex-row justify-center items-center gap-6 px-4 sm:px-6 lg:px-10 py-10">
 <div className="flex justify-center px-6 py-10">
      
      <div className="bg-pink-50 border border-pink-200 rounded-2xl px-10 py-8 text-center max-w-sm w-full">
        
        <p className="text-4xl mb-3">📸</p>
        
        <h3 className="font-extrabold text-pink-900 text-xl mb-1">
          {language === 'hi' ? 'इंस्टाग्राम पर चैट करें' : 'Chat on Instagram'}
        </h3>

        <p className="text-gray-500 text-sm mb-2">
          {language === 'hi' 
            ? 'इंस्टाग्राम चैट के ज़रिए मार्गदर्शन लें' 
            : 'Get guidance via Instagram chat'}
        </p>

        <p className="text-2xl font-extrabold text-pink-600 mb-6">₹99/-</p>

        
        <a
  href="https://www.instagram.com/passport_madad_45/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex items-center justify-center
    w-full sm:w-auto
    px-5 sm:px-10
    py-3
    text-sm sm:text-base
    font-bold
    text-center
    rounded-full
    bg-gradient-to-r from-pink-500 to-orange-400
    text-white
    hover:opacity-90
    transition
    break-words
  "
>
  {language === "hi"
    ? "📩 इंस्टाग्राम पर संदेश करें"
    : "📩 Message on Instagram"}
</a>

      </div>
      

    </div>
     <div className="flex justify-center px-6 py-10">
      
      <div className="bg-blue-200 border border-blue-200 rounded-2xl px-10 py-8 text-center max-w-sm w-full">
        
        <p className="text-4xl mb-3">ⓕ</p>
        
        <h3 className="font-extrabold text-blue-900 text-xl mb-1">
          {language === 'hi' ? 'फेसबुक पर चैट करें' : 'Chat on Facebook'}
        </h3>

        <p className="text-gray-500 text-sm mb-2">
          {language === 'hi' 
            ? 'फेसबुक चैट के ज़रिए मार्गदर्शन लें' 
            : 'Get guidance via Facebook chat'}
        </p>

        <p className="text-2xl font-extrabold text-blue-600 mb-6">₹99/-</p>

        
         <a href="https://www.facebook.com/Passportmadad45/"
          target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex items-center justify-center
    w-full sm:w-auto
    px-5 sm:px-10
    py-3
    text-sm sm:text-base
    font-bold
    text-center
    rounded-full
    bg-gradient-to-r from-pink-500 to-orange-400
    text-white
    hover:opacity-90
    transition
    break-words"
        >
          {language === 'hi' ? '📩 फेसबुक पर संदेश करें' : '📩 Message on Facebook'}
        </a>

      </div>
      

    </div>
    


</div>
    
   
  )
}

export default Instagram