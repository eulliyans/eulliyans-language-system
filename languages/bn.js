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
    showcase: {
      eyebrow: "বহুভাষিক ওয়েব প্রযুক্তি",
      title: "EULLIYAN'S ইউনিভার্সাল ল্যাঙ্গুয়েজ সিস্টেম",
      tagline: "একটি ভাষা সিস্টেম। অসংখ্য সম্ভাবনা।",
      featuresTitle: "সেবাসমূহ",
      featuresSubtitle: "শক্তিশালী বহুভাষিক ওয়েবসাইট প্রযুক্তি।",
      feature1Title: "পাঁচটি ভাষা",
      feature1Text: "ইংরেজি, বাংলা, আরবি, হিন্দি ও উর্দু ভাষার সুবিধা।",
      feature2Title: "RTL ও LTR",
      feature2Text: "ডান থেকে বামে এবং বাম থেকে ডানে লেখার স্বয়ংক্রিয় দিকনির্দেশনা।",
      feature3Title: "সহজ সংযুক্তি",
      feature3Text: "আপনার ওয়েবসাইটে Hosted Core Engine এবং Language Dictionary ব্যবহার করুন।",
      feature4Title: "ভাষা সংরক্ষণ",
      feature4Text: "ওয়েবসাইট পুনরায় লোড করলেও দর্শকের নির্বাচিত ভাষা সংরক্ষিত থাকে।",
      languagesTitle: "সমর্থিত ভাষাসমূহ",
      languagesSubtitle: "পাঁচটি ভাষা, লেখার দুটি দিক।",
      systemTitle: "সিস্টেমের তথ্য",
      engine: "ইঞ্জিন",
      languagesRegistered: "নিবন্ধিত ভাষা",
      direction: "লেখার দিক",
      savedLanguage: "সংরক্ষিত ভাষা",
      licensingTitle: "লাইসেন্স ও সুযোগ",
      licensingSubtitle: "ওয়েবসাইট, ডেভেলপার ও ব্যবসার জন্য নমনীয় সুবিধা।",
      basicTitle: "বেসিক সিস্টেম",
      basicText: "EULLIYAN'S নিজস্ব ওয়েবসাইট এবং লাইসেন্সপ্রাপ্ত ক্লায়েন্ট প্রজেক্টের জন্য মৌলিক ভাষা সুবিধা।",
      developerTitle: "ডেভেলপার লাইসেন্স",
      developerText: "ক্লায়েন্ট ওয়েবসাইটে সিস্টেম সংযুক্ত করার জন্য ডেভেলপার ও এজেন্সির বাণিজ্যিক লাইসেন্স।",
      premiumTitle: "প্রিমিয়াম সিস্টেম",
      premiumText: "আলাদা প্রিমিয়াম লাইসেন্সের অধীনে ঐচ্ছিক উন্নত সুবিধা।",
      aboutTitle: "আমাদের পরিচিতি",
      aboutText: "EULLIYAN'S ডেভেলপার ও ব্যবসার জন্য ব্যবহারিক ডিজিটাল টুল এবং বহুভাষিক ওয়েব প্রযুক্তি তৈরি করে।",
      mainDemo: "মূল ডেমো",
      clientTest: "ক্লায়েন্ট পরীক্ষা",
      integrationGuide: "সংযুক্তি নির্দেশিকা",
      clientLicense: "ক্লায়েন্ট লাইসেন্স",
      developerLicense: "ডেভেলপার লাইসেন্স",
      premiumLicense: "প্রিমিয়াম লাইসেন্স",
      copyright: "সর্বস্বত্ব সংরক্ষিত।",
      contact: "যোগাযোগ"
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
