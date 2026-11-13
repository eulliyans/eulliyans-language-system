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
        aboutPage: {
      eyebrow: "मेरे बारे में",
      title: "EULLIYAN कौन है?",
      intro: "मैं EULLIYAN हूँ, एक वेब डेवलपर और डिजिटल क्रिएटर। मैं सीखने, कुछ नया बनाने और तकनीक के माध्यम से बेहतर भविष्य बनाने में विश्वास रखता हूँ।",

      journeyTitle: "मेरा सफ़र",
      journeyText: "मैंने जिज्ञासा और एक सपने के साथ शुरुआत की। धीरे-धीरे वेब डेवलपमेंट सीखा और अपनी पहली वेबसाइट बनाई। उस छोटी-सी शुरुआत ने मुझे बड़े सपने देखने का आत्मविश्वास दिया।",

      visionTitle: "मेरा विज़न",
      visionText: "मैं अभी भी सीख रहा हूँ, आगे बढ़ रहा हूँ और नई चीज़ें बना रहा हूँ। मेरा लक्ष्य विचारों को उपयोगी डिजिटल अनुभवों में बदलना है। कड़ी मेहनत और अल्लाह की कृपा से, इंशाअल्लाह, मैं आगे बढ़ता रहूँगा।",

      motto: "सीखना जारी है। बनाना जारी है। सपने देखना जारी है।",
      tagline: "बनाएँ, रचें, सुरक्षित रखें।"
    },
    showcase: {
      eyebrow: "बहुभाषी वेब तकनीक",
      title: "EULLIYAN'S यूनिवर्सल लैंग्वेज सिस्टम",
      tagline: "एक भाषा प्रणाली। अनेक संभावनाएँ।",
      featuresTitle: "सेवाएँ",
      featuresSubtitle: "शक्तिशाली बहुभाषी वेबसाइट तकनीक।",
      feature1Title: "पाँच भाषाएँ",
      feature1Text: "अंग्रेज़ी, बंगाली, अरबी, हिंदी और उर्दू का समर्थन।",
      feature2Title: "RTL और LTR",
      feature2Text: "दाएँ से बाएँ और बाएँ से दाएँ लिखने की स्वचालित दिशा।",
      feature3Title: "आसान एकीकरण",
      feature3Text: "अपनी वेबसाइट में होस्टेड Core Engine और भाषा डिक्शनरी का उपयोग करें।",
      feature4Title: "भाषा सुरक्षित रखें",
      feature4Text: "वेबसाइट दोबारा लोड करने पर भी आगंतुक की चुनी हुई भाषा याद रखें।",
      languagesTitle: "समर्थित भाषाएँ",
      languagesSubtitle: "पाँच भाषाएँ, लिखने की दो दिशाएँ।",
      systemTitle: "सिस्टम की जानकारी",
      engine: "इंजन",
      languagesRegistered: "पंजीकृत भाषाएँ",
      direction: "लिखने की दिशा",
      savedLanguage: "सहेजी गई भाषा",
      licensingTitle: "लाइसेंस और अवसर",
      licensingSubtitle: "वेबसाइटों, डेवलपर्स और व्यवसायों के लिए लचीले विकल्प।",
      basicTitle: "बेसिक सिस्टम",
      basicText: "EULLIYAN'S की अपनी वेबसाइटों और लाइसेंस प्राप्त क्लाइंट प्रोजेक्ट्स के लिए बुनियादी भाषा सुविधाएँ।",
      developerTitle: "डेवलपर लाइसेंस",
      developerText: "क्लाइंट वेबसाइटों में सिस्टम जोड़ने वाले डेवलपर्स और एजेंसियों के लिए व्यावसायिक लाइसेंस विकल्प।",
      premiumTitle: "प्रीमियम सिस्टम",
      premiumText: "अलग Premium लाइसेंस के अंतर्गत वैकल्पिक उन्नत सुविधाएँ।",
      aboutTitle: "हमारे बारे में",
      aboutText: "EULLIYAN'S डेवलपर्स और व्यवसायों के लिए उपयोगी डिजिटल टूल और बहुभाषी वेबसाइट तकनीक विकसित करता है।",
      mainDemo: "मुख्य डेमो",
      clientTest: "क्लाइंट टेस्ट",
      integrationGuide: "एकीकरण गाइड",
      clientLicense: "क्लाइंट लाइसेंस",
      developerLicense: "डेवलपर लाइसेंस",
      premiumLicense: "प्रीमियम लाइसेंस",
      copyright: "सर्वाधिकार सुरक्षित।",
      contact: "संपर्क"
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
