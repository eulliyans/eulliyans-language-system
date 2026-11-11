/*!
 * EULLIYAN Universal Language System
 * Urdu Dictionary
 * Version: 1.0.0
 */

(function (window) {
  "use strict";

  const urdu = {

    meta: {
      code: "ur",
      name: "Urdu",
      nativeName: "اردو",
      direction: "rtl"
    },

    common: {
      home: "ہوم",
      about: "تعارف",
      projects: "منصوبے",
      services: "خدمات",
      contact: "رابطہ",
      search: "تلاش",
      menu: "مینو",
      language: "زبان",
      settings: "ترتیبات",
      welcome: "خوش آمدید",
      loading: "لوڈ ہو رہا ہے...",
      learnMore: "مزید جانیں",
      readMore: "مزید پڑھیں",
      viewAll: "سب دیکھیں",
      back: "واپس",
      next: "اگلا",
      previous: "پچھلا",
      close: "بند کریں",
      cancel: "منسوخ کریں",
      save: "محفوظ کریں",
      edit: "ترمیم کریں",
      delete: "حذف کریں",
      submit: "جمع کریں",
      send: "بھیجیں",
      download: "ڈاؤن لوڈ",
      share: "شیئر کریں"
    },

    navigation: {
      home: "ہوم",
      about: "ہمارے بارے میں",
      projects: "ہمارے منصوبے",
      websites: "ویب سائٹس",
      videos: "ویڈیوز",
      reels: "ریلز",
      contact: "ہم سے رابطہ کریں"
    },

    actions: {
      getStarted: "شروع کریں",
      explore: "دریافت کریں",
      viewDetails: "تفصیلات دیکھیں",
      visitWebsite: "ویب سائٹ دیکھیں",
      watchVideo: "ویڈیو دیکھیں",
      sendMessage: "پیغام بھیجیں",
      signIn: "سائن اِن",
      signUp: "اکاؤنٹ بنائیں",
      signOut: "سائن آؤٹ",
      continue: "جاری رکھیں",
      tryAgain: "دوبارہ کوشش کریں"
    },

    forms: {
      name: "پورا نام",
      email: "ای میل ایڈریس",
      phone: "فون نمبر",
      subject: "موضوع",
      message: "آپ کا پیغام",
      password: "پاس ورڈ",
      confirmPassword: "پاس ورڈ کی تصدیق کریں",
      required: "یہ خانہ پُر کرنا ضروری ہے",
      invalidEmail: "براہ کرم درست ای میل ایڈریس درج کریں",
      messageSent: "آپ کا پیغام کامیابی سے بھیج دیا گیا ہے",
      sendFailed: "آپ کا پیغام نہیں بھیجا جا سکا"
    },

    status: {
      success: "کامیابی",
      error: "خرابی",
      warning: "انتباہ",
      information: "معلومات",
      online: "آن لائن",
      offline: "آف لائن",
      available: "دستیاب",
      unavailable: "دستیاب نہیں"
    },

    time: {
      today: "آج",
      yesterday: "کل",
      tomorrow: "آنے والا کل",
      morning: "صبح",
      afternoon: "دوپہر",
      evening: "شام",
      night: "رات",
      hours: "گھنٹے",
      minutes: "منٹ",
      seconds: "سیکنڈ"
    },

    messages: {
      welcome: "ہماری ویب سائٹ پر خوش آمدید!",
      noResults: "کوئی نتیجہ نہیں ملا",
      somethingWrong: "کچھ غلط ہو گیا",
      tryAgain: "براہ کرم دوبارہ کوشش کریں",
      confirmDelete: "کیا آپ واقعی اسے حذف کرنا چاہتے ہیں؟",
      changesSaved: "آپ کی تبدیلیاں محفوظ ہو گئی ہیں",
      pageNotFound: "صفحہ نہیں ملا"
    },

    footer: {
      quickLinks: "فوری لنکس",
      followUs: "ہمیں فالو کریں",
      privacy: "رازداری کی پالیسی",
      terms: "شرائط و ضوابط",
      copyright: "جملہ حقوق محفوظ ہیں"
    }

  };

  // Register Urdu dictionary
  if (
    window.EULLIYANS_LANG &&
    typeof window.EULLIYANS_LANG.register === "function"
  ) {
    window.EULLIYANS_LANG.register("ur", urdu);
  } else {
    console.error(
      "EULLIYAN Language Engine must load before the Urdu dictionary."
    );
  }

})(window);
