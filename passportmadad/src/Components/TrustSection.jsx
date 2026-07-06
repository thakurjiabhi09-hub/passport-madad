import React from "react";
import { useLangauge } from "../Context/LanguageContext";

const lang01 = {
  en: "Note: Payment After Service",
  hi: "नोट: सेवा के बाद भुगतान",
};

const lang02 = {
  en: "You don't pay before the service. 100% satisfaction first.",
  hi: "आपको सर्विस से पहले पेमेंट नहीं करना है, पहले 100% संतुष्टि मिलेगी।",
};

const lang03 = {
  en: "Trusted by",
  hi: "इनका भरोसा",
};

const lang04 = {
  en: "100+ Members",
  hi: "100 से ज़्यादा सदस्य",
};

function TrustSection() {
  const { language } = useLangauge();

  return (
    <div className="px-4 sm:px-6 py-6">
      <div className="mx-auto max-w-6xl bg-red-50 border border-orange-200 rounded-xl shadow-sm px-5 sm:px-8 py-5">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* Left */}
          <div className="flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🛡️</span>

            <div>
              <p className="font-bold text-gray-700 text-base sm:text-lg">
                {lang01[language]}
              </p>

              <p className="text-gray-500 text-sm sm:text-base">
                {lang02[language]}
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">✅</span>

            <div>
              <p className="font-bold text-gray-700 text-base sm:text-lg">
                {lang03[language]}
              </p>

              <p className="text-gray-500 text-sm sm:text-base">
                {lang04[language]}
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default TrustSection;