
/*!
 * EULLIYAN Universal Language System
 * English Dictionary
 * Version: 1.0.0
 */

(function (window) {
  "use strict";

  const english = {

    meta: {
      code: "en",
      name: "English",
      nativeName: "English",
      direction: "ltr"
    },

    common: {
      home: "Home",
      about: "About",
      projects: "Projects",
      services: "Services",
      contact: "Contact",
      search: "Search",
      menu: "Menu",
      language: "Language",
      settings: "Settings",
      welcome: "Welcome",
      loading: "Loading...",
      learnMore: "Learn More",
      readMore: "Read More",
      viewAll: "View All",
      back: "Back",
      next: "Next",
      previous: "Previous",
      close: "Close",
      cancel: "Cancel",
      save: "Save",
      edit: "Edit",
      delete: "Delete",
      submit: "Submit",
      send: "Send",
      download: "Download",
      share: "Share"
    },

    navigation: {
      home: "Home",
      about: "About Us",
      projects: "Our Projects",
      websites: "Websites",
      videos: "Videos",
      reels: "Reels",
      contact: "Contact Us"
    },

    actions: {
      getStarted: "Get Started",
      explore: "Explore",
      viewDetails: "View Details",
      visitWebsite: "Visit Website",
      watchVideo: "Watch Video",
      sendMessage: "Send Message",
      signIn: "Sign In",
      signUp: "Sign Up",
      signOut: "Sign Out",
      continue: "Continue",
      tryAgain: "Try Again"
    },

    forms: {
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      subject: "Subject",
      message: "Your Message",
      password: "Password",
      confirmPassword: "Confirm Password",
      required: "This field is required",
      invalidEmail: "Please enter a valid email address",
      messageSent: "Your message has been sent successfully",
      sendFailed: "Unable to send your message"
    },

    status: {
      success: "Success",
      error: "Error",
      warning: "Warning",
      information: "Information",
      online: "Online",
      offline: "Offline",
      available: "Available",
      unavailable: "Unavailable"
    },

    time: {
      today: "Today",
      yesterday: "Yesterday",
      tomorrow: "Tomorrow",
      morning: "Morning",
      afternoon: "Afternoon",
      evening: "Evening",
      night: "Night",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds"
    },

    messages: {
      welcome: "Welcome to our website!",
      noResults: "No results found",
      somethingWrong: "Something went wrong",
      tryAgain: "Please try again",
      confirmDelete: "Are you sure you want to delete this?",
      changesSaved: "Your changes have been saved",
      pageNotFound: "Page not found"
    },
    showcase: {
      eyebrow: "MULTILINGUAL WEB TECHNOLOGY",
      title: "EULLIYAN'S Universal Language System",
      tagline: "One language system. Multiple possibilities.",
      featuresTitle: "Services",
      featuresSubtitle: "Powerful multilingual website technology.",
      feature1Title: "Five Languages",
      feature1Text: "English, Bengali, Arabic, Hindi and Urdu support.",
      feature2Title: "RTL & LTR",
      feature2Text: "Automatic text direction for right-to-left and left-to-right languages.",
      feature3Title: "Easy Integration",
      feature3Text: "Use the hosted Core Engine and language dictionaries in your website.",
      feature4Title: "Saved Language",
      feature4Text: "Remember the visitor's selected language after reloading the website.",
      languagesTitle: "Supported Languages",
      languagesSubtitle: "Five languages, two writing directions.",
      systemTitle: "System Information",
      engine: "Engine",
      languagesRegistered: "Languages registered",
      direction: "Direction",
      savedLanguage: "Saved language",
      licensingTitle: "Licensing & Opportunities",
      licensingSubtitle: "Flexible options for websites, developers and businesses.",
      basicTitle: "Basic System",
      basicText: "Basic language functionality for EULLIYAN'S own websites and licensed client projects.",
      developerTitle: "Developer License",
      developerText: "Commercial licensing options for developers and agencies integrating the system into client websites.",
      premiumTitle: "Premium System",
      premiumText: "Optional advanced features under a separate Premium license.",
      aboutTitle: "About Us",
      aboutText: "EULLIYAN'S develops practical digital tools and multilingual website technology for developers and businesses.",
      mainDemo: "Main Demo",
      clientTest: "Client Test",
      integrationGuide: "Integration Guide",
      clientLicense: "Client License",
      developerLicense: "Developer License",
      premiumLicense: "Premium License",
      copyright: "All rights reserved.",
      contact: "Contact"
    },
        aboutPage: {
      eyebrow: "ABOUT ME",
      title: "Who Is EULLIYAN?",
      intro: "I’m EULLIYAN, a Web Developer and Digital Creator who believes in learning, creating, and building a better future through technology.",
      journeyTitle: "My Journey",
      journeyText: "I started with curiosity and a dream. Step by step, I learned web development and built my first website. That small beginning gave me the confidence to dream bigger.",
      visionTitle: "My Vision",
      visionText: "I’m still learning, growing, and creating. My goal is to turn ideas into meaningful digital experiences. With hard work and Allah’s blessings, InshaAllah, I’ll keep moving forward.",
      motto: "Still Learning. Still Building. Still Dreaming.",
      tagline: "Build, Create, Preserve."
    },
    footer: {
      quickLinks: "Quick Links",
      followUs: "Follow Us",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      copyright: "All Rights Reserved"
    }

  };

  // Register English dictionary
  if (
    window.EULLIYANS_LANG &&
    typeof window.EULLIYANS_LANG.register === "function"
  ) {
    window.EULLIYANS_LANG.register("en", english);
  } else {
    console.error(
      "EULLIYAN Language Engine must load before the English dictionary."
    );
  }

})(window);
