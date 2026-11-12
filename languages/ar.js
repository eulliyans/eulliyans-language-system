/*!
 * EULLIYAN Universal Language System
 * Arabic Dictionary
 * Version: 1.0.0
 */

(function (window) {
  "use strict";

  const arabic = {

    meta: {
      code: "ar",
      name: "Arabic",
      nativeName: "العربية",
      direction: "rtl"
    },

    common: {
      home: "الرئيسية",
      about: "من نحن",
      projects: "المشاريع",
      services: "الخدمات",
      contact: "اتصل بنا",
      search: "بحث",
      menu: "القائمة",
      language: "اللغة",
      settings: "الإعدادات",
      welcome: "مرحباً",
      loading: "جارٍ التحميل...",
      learnMore: "اعرف المزيد",
      readMore: "اقرأ المزيد",
      viewAll: "عرض الكل",
      back: "رجوع",
      next: "التالي",
      previous: "السابق",
      close: "إغلاق",
      cancel: "إلغاء",
      save: "حفظ",
      edit: "تعديل",
      delete: "حذف",
      submit: "إرسال",
      send: "إرسال",
      download: "تنزيل",
      share: "مشاركة"
    },

    navigation: {
      home: "الرئيسية",
      about: "من نحن",
      projects: "مشاريعنا",
      websites: "المواقع الإلكترونية",
      videos: "الفيديوهات",
      reels: "المقاطع القصيرة",
      contact: "اتصل بنا"
    },

    actions: {
      getStarted: "ابدأ الآن",
      explore: "استكشف",
      viewDetails: "عرض التفاصيل",
      visitWebsite: "زيارة الموقع",
      watchVideo: "مشاهدة الفيديو",
      sendMessage: "إرسال رسالة",
      signIn: "تسجيل الدخول",
      signUp: "إنشاء حساب",
      signOut: "تسجيل الخروج",
      continue: "متابعة",
      tryAgain: "حاول مرة أخرى"
    },

    forms: {
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      subject: "الموضوع",
      message: "رسالتك",
      password: "كلمة المرور",
      confirmPassword: "تأكيد كلمة المرور",
      required: "هذا الحقل مطلوب",
      invalidEmail: "يرجى إدخال بريد إلكتروني صحيح",
      messageSent: "تم إرسال رسالتك بنجاح",
      sendFailed: "تعذر إرسال رسالتك"
    },

    status: {
      success: "نجاح",
      error: "خطأ",
      warning: "تحذير",
      information: "معلومات",
      online: "متصل",
      offline: "غير متصل",
      available: "متاح",
      unavailable: "غير متاح"
    },

    time: {
      today: "اليوم",
      yesterday: "أمس",
      tomorrow: "غداً",
      morning: "الصباح",
      afternoon: "بعد الظهر",
      evening: "المساء",
      night: "الليل",
      hours: "ساعات",
      minutes: "دقائق",
      seconds: "ثوانٍ"
    },

    messages: {
      welcome: "مرحباً بك في موقعنا!",
      noResults: "لم يتم العثور على نتائج",
      somethingWrong: "حدث خطأ ما",
      tryAgain: "يرجى المحاولة مرة أخرى",
      confirmDelete: "هل أنت متأكد أنك تريد الحذف؟",
      changesSaved: "تم حفظ التغييرات",
      pageNotFound: "الصفحة غير موجودة"
    },
    showcase: {
      eyebrow: "تقنيات الويب متعددة اللغات",
      title: "نظام EULLIYAN'S العالمي للغات",
      tagline: "نظام لغوي واحد. إمكانيات متعددة.",
      featuresTitle: "الخدمات",
      featuresSubtitle: "تقنيات قوية للمواقع متعددة اللغات.",
      feature1Title: "خمس لغات",
      feature1Text: "دعم الإنجليزية والبنغالية والعربية والهندية والأردية.",
      feature2Title: "RTL و LTR",
      feature2Text: "تحديد تلقائي لاتجاه الكتابة من اليمين إلى اليسار ومن اليسار إلى اليمين.",
      feature3Title: "سهولة الدمج",
      feature3Text: "استخدم المحرك الأساسي وقواميس اللغات المستضافة في موقعك.",
      feature4Title: "حفظ اللغة",
      feature4Text: "تذكر اللغة التي اختارها الزائر حتى بعد إعادة تحميل الموقع.",
      languagesTitle: "اللغات المدعومة",
      languagesSubtitle: "خمس لغات واتجاهان للكتابة.",
      systemTitle: "معلومات النظام",
      engine: "المحرك",
      languagesRegistered: "اللغات المسجلة",
      direction: "اتجاه الكتابة",
      savedLanguage: "اللغة المحفوظة",
      licensingTitle: "التراخيص والفرص",
      licensingSubtitle: "خيارات مرنة للمواقع والمطورين والشركات.",
      basicTitle: "النظام الأساسي",
      basicText: "وظائف لغوية أساسية لمواقع EULLIYAN'S ومشاريع العملاء المرخصة.",
      developerTitle: "ترخيص المطور",
      developerText: "خيارات ترخيص تجاري للمطورين والوكالات لدمج النظام في مواقع العملاء.",
      premiumTitle: "النظام المميز",
      premiumText: "ميزات متقدمة اختيارية بموجب ترخيص Premium منفصل.",
      aboutTitle: "من نحن",
      aboutText: "تطور EULLIYAN'S أدوات رقمية عملية وتقنيات مواقع متعددة اللغات للمطورين والشركات.",
      mainDemo: "العرض الرئيسي",
      clientTest: "اختبار العميل",
      integrationGuide: "دليل الدمج",
      clientLicense: "ترخيص العميل",
      developerLicense: "ترخيص المطور",
      premiumLicense: "ترخيص Premium",
      copyright: "جميع الحقوق محفوظة.",
      contact: "اتصل بنا"
    },
    footer: {
      quickLinks: "روابط سريعة",
      followUs: "تابعنا",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      copyright: "جميع الحقوق محفوظة"
    }

  };

  // Register Arabic dictionary
  if (
    window.EULLIYANS_LANG &&
    typeof window.EULLIYANS_LANG.register === "function"
  ) {
    window.EULLIYANS_LANG.register("ar", arabic);
  } else {
    console.error(
      "EULLIYAN Language Engine must load before the Arabic dictionary."
    );
  }

})(window);
