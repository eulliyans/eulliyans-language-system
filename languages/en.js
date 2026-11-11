
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
