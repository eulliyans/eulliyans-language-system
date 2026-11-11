
/*!
 * EULLIYAN Universal Language System
 * Core Engine
 * Version: 1.0.0
 */

(function (window, document) {
  "use strict";

  const dictionaries = {};

  const config = {
    defaultLanguage: "en",
    fallbackLanguage: "en",
    storageKey: "eulliyans_language",
    directionMap: {
      en: "ltr",
      bn: "ltr",
      ar: "rtl",
      hi: "ltr",
      ur: "rtl"
    }
  };

  let currentLanguage = config.defaultLanguage;
  let initialized = false;

  // Read nested translation keys
  function getValue(object, key) {
    return key.split(".").reduce((value, part) => {
      return value && value[part] !== undefined
        ? value[part]
        : undefined;
    }, object);
  }

  // Replace dynamic values
  function interpolate(value, variables) {
    return value.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, key) => {
      return variables[key] !== undefined
        ? String(variables[key])
        : match;
    });
  }

  const Language = {

    version: "1.0.0",

    // Register a language dictionary
    register(language, dictionary) {
      if (!language || !dictionary || typeof dictionary !== "object") {
        console.error("EULLIYAN: Invalid language dictionary.");
        return false;
      }

      dictionaries[language] = dictionary;

      if (initialized && language === currentLanguage) {
        this.translate();
      }

      return true;
    },

    // Get translated text
    t(key, variables = {}, language = currentLanguage) {
      let value = getValue(dictionaries[language] || {}, key);

      if (value === undefined) {
        value = getValue(
          dictionaries[config.fallbackLanguage] || {},
          key
        );
      }

      if (typeof value !== "string") {
        return key;
      }

      return interpolate(value, variables);
    },

    // Change website language
    setLanguage(language, options = {}) {
      if (!dictionaries[language]) {
        console.warn("EULLIYAN: Language not registered:", language);
        return false;
      }

      const previousLanguage = currentLanguage;
      currentLanguage = language;

      document.documentElement.lang = language;
      document.documentElement.dir =
        config.directionMap[language] || "ltr";

      if (options.persist !== false) {
        try {
          localStorage.setItem(config.storageKey, language);
        } catch (error) {
          console.warn("EULLIYAN: Language storage unavailable.");
        }
      }

      this.translate();

      document.dispatchEvent(
        new CustomEvent("eulliyans:languageChanged", {
          detail: {
            language,
            previousLanguage,
            direction: document.documentElement.dir
          }
        })
      );

      return true;
    },

    // Translate website content
    translate(root = document) {
      root.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        element.textContent = this.t(key);
      });

      const attributes = [
        "placeholder",
        "title",
        "aria-label",
        "alt"
      ];

      attributes.forEach(attribute => {
        root.querySelectorAll(`[data-i18n-${attribute}]`)
          .forEach(element => {
            const key = element.getAttribute(
              `data-i18n-${attribute}`
            );

            element.setAttribute(attribute, this.t(key));
          });
      });
    },

    // Initialize language system
    init(options = {}) {
      Object.assign(config, options);

      let savedLanguage = null;

      try {
        savedLanguage = localStorage.getItem(config.storageKey);
      } catch (error) {
        savedLanguage = null;
      }

      initialized = true;

      const selectedLanguage =
        savedLanguage && dictionaries[savedLanguage]
          ? savedLanguage
          : config.defaultLanguage;

      return this.setLanguage(selectedLanguage, {
        persist: false
      });
    },

    // Get current language
    getLanguage() {
      return currentLanguage;
    },

    // Get available languages
    getLanguages() {
      return Object.keys(dictionaries);
    },

    // Check language availability
    hasLanguage(language) {
      return Boolean(dictionaries[language]);
    },

    // Update dynamically added content
    refresh(root = document) {
      this.translate(root);
    }

  };

  window.EULLIYANS_LANG = Language;

})(window, document);
