
/*!
 * EULLIYAN'S Language Premium Module
 * Easy Language Expansion
 * Version: 1.0.0
 */

(function (window, document) {
  "use strict";

  const engine = window.EULLIYANS_LANG;

  if (!engine) {
    console.error("Language Premium: Core Engine not found.");
    return;
  }

  let selector = null;
  const premiumLanguages = [];

  function updateDirection(language) {
    const item = premiumLanguages.find(
      entry => entry.code === language
    );

    if (item) {
      document.documentElement.dir =
        item.direction || "ltr";
    }
  }

  function addSelectorOption(language) {
    if (!selector) return;

    const exists = Array.from(selector.options).some(
      option => option.value === language.code
    );

    if (exists) return;

    const option = document.createElement("option");
    option.value = language.code;
    option.textContent =
      language.nativeName || language.name || language.code;

    selector.appendChild(option);
  }

  function loadLanguage(language) {
    return new Promise((resolve, reject) => {
      if (
        !language ||
        typeof language.code !== "string" ||
        typeof language.file !== "string"
      ) {
        reject(new Error("Invalid language configuration."));
        return;
      }

      if (
        premiumLanguages.some(
          item => item.code === language.code
        )
      ) {
        reject(new Error("Language already configured."));
        return;
      }

      function completeLoading() {
        if (!engine.hasLanguage(language.code)) {
          reject(
            new Error(
              "Dictionary did not register: " + language.code
            )
          );
          return;
        }

        premiumLanguages.push(language);
        addSelectorOption(language);
        resolve(true);
      }

      if (engine.hasLanguage(language.code)) {
        completeLoading();
        return;
      }

      const script = document.createElement("script");
      script.src = language.file;
      script.async = true;

      script.onload = completeLoading;

      script.onerror = function () {
        reject(
          new Error("Failed to load dictionary: " + language.file)
        );
      };

      document.head.appendChild(script);
    });
  }

  function handleLanguageChange(event) {
    if (!event.detail) return;

    const language = event.detail.language;

    updateDirection(language);

    if (selector) {
      selector.value = language;
    }
  }

  function handleSelectorChange() {
    if (selector) {
      engine.setLanguage(selector.value);
    }
  }

  const Premium = {

    version: "1.0.0",

    async init(options = {}) {
      if (
        !options ||
        typeof options !== "object" ||
        Array.isArray(options)
      ) {
        return false;
      }

      selector = typeof options.selector === "string"
        ? document.querySelector(options.selector)
        : options.selector || null;

      document.removeEventListener(
        "eulliyans:languageChanged",
        handleLanguageChange
      );

      document.addEventListener(
        "eulliyans:languageChanged",
        handleLanguageChange
      );

      if (selector) {
        selector.removeEventListener(
          "change",
          handleSelectorChange
        );

        selector.addEventListener(
          "change",
          handleSelectorChange
        );
      }

      const languages = Array.isArray(options.languages)
        ? options.languages
        : [];

      const results = await Promise.allSettled(
        languages.map(loadLanguage)
      );

      // Restore saved language after dictionaries load
      let savedLanguage = null;

      try {
        savedLanguage = window.localStorage.getItem(
          options.storageKey || "eulliyans_language"
        );
      } catch (error) {
        console.warn(
          "Premium: Language storage unavailable."
        );
      }

      if (
        savedLanguage &&
        engine.hasLanguage(savedLanguage)
      ) {
        engine.setLanguage(savedLanguage, {
          persist: false
        });
      }

      if (selector) {
        selector.value = engine.getLanguage();
      }

      updateDirection(engine.getLanguage());

      return results;
    },

    loadLanguage

  };

  window.EULLIYANS_PREMIUM = Premium;

})(window, document);
