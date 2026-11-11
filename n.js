/*!
 * EULLIYAN Universal Language System
 * Bengali Dictionary
 * Version: 1.0.0
 */

(function (window) {
  "use strict";

  const bengali = {

    meta: {
      code: "bn",
      name: "Bengali",
      nativeName: "বাংলা",
      direction: "ltr"
    },

    common: {
      home: "হোম",
      about: "পরিচিতি",
      projects: "প্রকল্পসমূহ",
      services: "সেবাসমূহ",
      contact: "যোগাযোগ",
      search: "অনুসন্ধান",
      menu: "মেনু",
      language: "ভাষা",
      settings: "সেটিংস",
      welcome: "স্বাগতম",
      loading: "লোড হচ্ছে...",
      learnMore: "আরও জানুন",
      readMore: "আরও পড়ুন",
      viewAll: "সব দেখুন",
      back: "ফিরে যান",
      next: "পরবর্তী",
      previous: "পূর্ববর্তী",
      close: "বন্ধ করুন",
      cancel: "বাতিল",
      save: "সংরক্ষণ করুন",
      edit: "সম্পাদনা",
      delete: "মুছে ফেলুন",
      submit: "জমা দিন",
      send: "পাঠান",
      download: "ডাউনলোড",
      share: "শেয়ার করুন"
    },

    navigation: {
      home: "হোম",
      about: "আমাদের পরিচিতি",
      projects: "আমাদের প্রকল্প",
      websites: "ওয়েবসাইটসমূহ",
      videos: "ভিডিও",
      reels: "রিলস",
      contact: "যোগাযোগ করুন"
    },

    actions: {
      getStarted: "শুরু করুন",
      explore: "ঘুরে দেখুন",
      viewDetails: "বিস্তারিত দেখুন",
      visitWebsite: "ওয়েবসাইট দেখুন",
      watchVideo: "ভিডিও দেখুন",
      sendMessage: "বার্তা পাঠান",
      signIn: "সাইন ইন",
      signUp: "নিবন্ধন করুন",
      signOut: "সাইন আউট",
      continue: "চালিয়ে যান",
      tryAgain: "আবার চেষ্টা করুন"
    },

    forms: {
      name: "পূর্ণ নাম",
      email: "ইমেইল ঠিকানা",
      phone: "ফোন নম্বর",
      subject: "বিষয়",
      message: "আপনার বার্তা",
      password: "পাসওয়ার্ড",
      confirmPassword: "পাসওয়ার্ড নিশ্চিত করুন",
      required: "এই ঘরটি পূরণ করা আবশ্যক",
      invalidEmail: "সঠিক ইমেইল ঠিকানা লিখুন",
      messageSent: "আপনার বার্তা সফলভাবে পাঠানো হয়েছে",
      sendFailed: "আপনার বার্তা পাঠানো সম্ভব হয়নি"
    },

    status: {
      success: "সফল",
      error: "ত্রুটি",
      warning: "সতর্কতা",
      information: "তথ্য",
      online: "অনলাইন",
      offline: "অফলাইন",
      available: "উপলব্ধ",
      unavailable: "অনুপলব্ধ"
    },

    time: {
      today: "আজ",
      yesterday: "গতকাল",
      tomorrow: "আগামীকাল",
      morning: "সকাল",
      afternoon: "দুপুর",
      evening: "সন্ধ্যা",
      night: "রাত",
      hours: "ঘণ্টা",
      minutes: "মিনিট",
      seconds: "সেকেন্ড"
    },

    messages: {
      welcome: "আমাদের ওয়েবসাইটে আপনাকে স্বাগতম!",
      noResults: "কোনো ফলাফল পাওয়া যায়নি",
      somethingWrong: "কিছু একটা সমস্যা হয়েছে",
      tryAgain: "অনুগ্রহ করে আবার চেষ্টা করুন",
      confirmDelete: "আপনি কি নিশ্চিত যে এটি মুছে ফেলতে চান?",
      changesSaved: "আপনার পরিবর্তনগুলো সংরক্ষণ করা হয়েছে",
      pageNotFound: "পৃষ্ঠাটি খুঁজে পাওয়া যায়নি"
    },

    footer: {
      quickLinks: "দ্রুত লিংক",
      followUs: "আমাদের অনুসরণ করুন",
      privacy: "গোপনীয়তা নীতি",
      terms: "শর্তাবলি",
      copyright: "সর্বস্বত্ব সংরক্ষিত"
    }

  };

  // Register Bengali dictionary
  if (
    window.EULLIYANS_LANG &&
    typeof window.EULLIYANS_LANG.register === "function"
  ) {
    window.EULLIYANS_LANG.register("bn", bengali);
  } else {
    console.error(
      "EULLIYAN Language Engine must load before the Bengali dictionary."
    );
  }

})(window);
