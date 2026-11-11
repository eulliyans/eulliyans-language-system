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
