/*!
 * EULLIYAN Universal Language System
 * Hindi Dictionary
 * Version: 1.0.0
 */

(function (window) {
  "use strict";

  const hindi = {

    meta: {
      code: "hi",
      name: "Hindi",
      nativeName: "हिन्दी",
      direction: "ltr"
    },

    common: {
      home: "होम",
      about: "परिचय",
      projects: "परियोजनाएँ",
      services: "सेवाएँ",
      contact: "संपर्क",
      search: "खोजें",
      menu: "मेन्यू",
      language: "भाषा",
      settings: "सेटिंग्स",
      welcome: "स्वागत है",
      loading: "लोड हो रहा है...",
      learnMore: "और जानें",
      readMore: "और पढ़ें",
      viewAll: "सभी देखें",
      back: "वापस",
      next: "अगला",
      previous: "पिछला",
      close: "बंद करें",
      cancel: "रद्द करें",
      save: "सहेजें",
      edit: "संपादित करें",
      delete: "हटाएँ",
      submit: "जमा करें",
      send: "भेजें",
      download: "डाउनलोड",
      share: "साझा करें"
    },

    navigation: {
      home: "होम",
      about: "हमारे बारे में",
      projects: "हमारी परियोजनाएँ",
      websites: "वेबसाइटें",
      videos: "वीडियो",
      reels: "रील्स",
      contact: "हमसे संपर्क करें"
    },

    actions: {
      getStarted: "शुरू करें",
      explore: "देखें",
      viewDetails: "विवरण देखें",
      visitWebsite: "वेबसाइट पर जाएँ",
      watchVideo: "वीडियो देखें",
      sendMessage: "संदेश भेजें",
      signIn: "साइन इन करें",
      signUp: "खाता बनाएँ",
      signOut: "साइन आउट करें",
      continue: "जारी रखें",
      tryAgain: "फिर से प्रयास करें"
    },

    forms: {
      name: "पूरा नाम",
      email: "ईमेल पता",
      phone: "फ़ोन नंबर",
      subject: "विषय",
      message: "आपका संदेश",
      password: "पासवर्ड",
      confirmPassword: "पासवर्ड की पुष्टि करें",
      required: "यह फ़ील्ड भरना आवश्यक है",
      invalidEmail: "कृपया सही ईमेल पता दर्ज करें",
      messageSent: "आपका संदेश सफलतापूर्वक भेज दिया गया है",
      sendFailed: "आपका संदेश भेजा नहीं जा सका"
    },

    status: {
      success: "सफलता",
      error: "त्रुटि",
      warning: "चेतावनी",
      information: "जानकारी",
      online: "ऑनलाइन",
      offline: "ऑफ़लाइन",
      available: "उपलब्ध",
      unavailable: "अनुपलब्ध"
    },

    time: {
      today: "आज",
      yesterday: "कल",
      tomorrow: "आने वाला कल",
      morning: "सुबह",
      afternoon: "दोपहर",
      evening: "शाम",
      night: "रात",
      hours: "घंटे",
      minutes: "मिनट",
      seconds: "सेकंड"
    },

    messages: {
      welcome: "हमारी वेबसाइट पर आपका स्वागत है!",
      noResults: "कोई परिणाम नहीं मिला",
      somethingWrong: "कुछ गलत हो गया",
      tryAgain: "कृपया फिर से प्रयास करें",
      confirmDelete: "क्या आप वाकई इसे हटाना चाहते हैं?",
      changesSaved: "आपके बदलाव सहेज लिए गए हैं",
      pageNotFound: "पृष्ठ नहीं मिला"
    },

    footer: {
      quickLinks: "त्वरित लिंक",
      followUs: "हमें फ़ॉलो करें",
      privacy: "गोपनीयता नीति",
      terms: "नियम और शर्तें",
      copyright: "सर्वाधिकार सुरक्षित"
    }

  };

  // Register Hindi dictionary
  if (
    window.EULLIYANS_LANG &&
    typeof window.EULLIYANS_LANG.register === "function"
  ) {
    window.EULLIYANS_LANG.register("hi", hindi);
  } else {
    console.error(
      "EULLIYAN Language Engine must load before the Hindi dictionary."
    );
  }

})(window);
