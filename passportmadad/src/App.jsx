import TrustSection from './Components/Trustsection'
import Discalmer from './Components/Discalmer'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import { LangaugeProvider } from './Context/LanguageContext'
import Testi from './Components/Testi'
import WhyChooseUs from './Components/WhyChooseUs'
import Instagram from './Components/Instagram'
import Book from './Components/Book'
import FAQ from './Components/FAQ'

function App() {
  
  return (
    <>
    <LangaugeProvider>
      <div className="animated-bg w-full overflow-x-hidden">
           <Discalmer/>
         <Navbar/>
         <HeroSection/>
         <WhyChooseUs/>
         <Testi/>
         <FAQ/>
         <Instagram/>
           <TrustSection/>
         <Book/>
         
       
      </div>
        
    </LangaugeProvider>
  
      
    </>
  )
}

export default App
