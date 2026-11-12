
/*!
 * EULLIYAN Universal Language System
 * Core Engine
 * Version: 1.1.0
 */

(function (window, document) {
  "use strict";

  const dictionaries = Object.create(null);

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

  // Safely read nested translation keys
  function getValue(object, key) {
    if (
      !object ||
      typeof key !== "string" ||
      !key.trim()
    ) {
      return undefined;
    }

    return key.split(".").reduce((value, part) => {
      if (
        !value ||
        typeof value !== "object" ||
        !Object.prototype.hasOwnProperty.call(value, part)
      ) {
        return undefined;
      }

      return value[part];
    }, object);
  }

  // Replace dynamic values safely
  function interpolate(value, variables) {
    if (
      !variables ||
      typeof variables !== "object"
    ) {
      variables = {};
    }

    return value.replace(
      /\{\{\s*(\w+)\s*\}\}/g,
      (match, key) => {
        return Object.prototype.hasOwnProperty.call(
          variables,
          key
        )
          ? String(variables[key])
          : match;
      }
    );
  }

  // Safely read stored language
  function readSavedLanguage() {
    try {
      return window.localStorage.getItem(config.storageKey);
    } catch (error) {
      return null;
    }
  }

  // Safely save selected language
  function saveLanguage(language) {
    try {
      window.localStorage.setItem(
        config.storageKey,
        language
      );
    } catch (error) {
      console.warn(
        "EULLIYAN: Language storage unavailable."
      );
    }
  }

  // Apply translation to one element
  function translateElement(element, engine) {
    if (element.hasAttribute("data-i18n")) {
      const key = element.getAttribute("data-i18n");
      element.textContent = engine.t(key);
    }

    const attributes = [
      "placeholder",
      "title",
      "aria-label",
      "alt"
    ];

    attributes.forEach(attribute => {
      const dataAttribute = `data-i18n-${attribute}`;

      if (element.hasAttribute(dataAttribute)) {
        const key = element.getAttribute(dataAttribute);

        element.setAttribute(
          attribute,
          engine.t(key)
        );
      }
    });
  }

  // Translate root element and its children
  function translateRoot(root, engine) {
    if (!root) return;

    if (
      root.nodeType === 1 &&
      typeof root.matches === "function"
    ) {
      if (root.matches(
        "[data-i18n], [data-i18n-placeholder], [data-i18n-title], [data-i18n-aria-label], [data-i18n-alt]"
      )) {
        translateElement(root, engine);
      }
    }

    if (typeof root.querySelectorAll === "function") {
      root.querySelectorAll(
        "[data-i18n], [data-i18n-placeholder], [data-i18n-title], [data-i18n-aria-label], [data-i18n-alt]"
      ).forEach(element => {
        translateElement(element, engine);
      });
    }
  }

  const Language = {

    version: "1.1.0",

    // Register a language dictionary
    register(language, dictionary) {
      if (
        typeof language !== "string" ||
        !language.trim() ||
        !dictionary ||
        typeof dictionary !== "object" ||
        Array.isArray(dictionary)
      ) {
        console.error(
          "EULLIYAN: Invalid language dictionary."
        );
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
      if (typeof key !== "string" || !key.trim()) {
        return "";
      }

      let value = getValue(
        dictionaries[language] || {},
        key
      );

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
      if (
        typeof language !== "string" ||
        !dictionaries[language]
      ) {
        console.warn(
          "EULLIYAN: Language not registered:",
          language
        );
        return false;
      }

      const previousLanguage = currentLanguage;
      currentLanguage = language;

      const direction =
        Object.prototype.hasOwnProperty.call(
          config.directionMap,
          language
        )
          ? config.directionMap[language]
          : "ltr";

      document.documentElement.lang = language;
      document.documentElement.dir = direction;

      if (options.persist !== false) {
        saveLanguage(language);
      }

      this.translate();

      // Notify other website components
      try {
        document.dispatchEvent(
          new window.CustomEvent(
            "eulliyans:languageChanged",
            {
              detail: {
                language,
                previousLanguage,
                direction
              }
            }
          )
        );
      } catch (error) {
        console.warn(
          "EULLIYAN: Language event unavailable."
        );
      }

      return true;
    },

    // Translate website content
    translate(root = document) {
      translateRoot(root, this);
    },

    // Initialize language system
    init(options = {}) {
      if (
        options &&
        typeof options === "object" &&
        !Array.isArray(options)
      ) {
        if (
          typeof options.defaultLanguage === "string" &&
          options.defaultLanguage.trim()
        ) {
          config.defaultLanguage = options.defaultLanguage;
        }

        if (
          typeof options.fallbackLanguage === "string" &&
          options.fallbackLanguage.trim()
        ) {
          config.fallbackLanguage = options.fallbackLanguage;
        }

        if (
          typeof options.storageKey === "string" &&
          options.storageKey.trim()
        ) {
          config.storageKey = options.storageKey;
        }

        if (
          options.directionMap &&
          typeof options.directionMap === "object" &&
          !Array.isArray(options.directionMap)
        ) {
          Object.assign(
            config.directionMap,
            options.directionMap
          );
        }
      }

      const savedLanguage = readSavedLanguage();

      initialized = true;

      const selectedLanguage =
        savedLanguage && dictionaries[savedLanguage]
          ? savedLanguage
          : dictionaries[config.defaultLanguage]
            ? config.defaultLanguage
            : dictionaries[config.fallbackLanguage]
              ? config.fallbackLanguage
              : Object.keys(dictionaries)[0];

      if (!selectedLanguage) {
        console.warn(
          "EULLIYAN: No language dictionaries registered."
        );
        return false;
      }

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
      return Boolean(
        typeof language === "string" &&
        dictionaries[language]
      );
    },

    // Update dynamically added content
    refresh(root = document) {
      this.translate(root);
    }

  };

  window.EULLIYANS_LANG = Language;

})(window, document);

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
