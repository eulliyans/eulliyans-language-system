
/*!
 * EULLIYAN Universal Language System
 * French Dictionary
 * Version: 1.0.0
 */

(function (window) {
  "use strict";

  const french = {

    meta: {
      code: "fr",
      name: "French",
      nativeName: "Français",
      direction: "ltr"
    },

    common: {
      home: "Accueil",
      about: "À propos",
      welcome: "Bienvenue",
      language: "Langue",
      save: "Enregistrer",
      cancel: "Annuler",
      close: "Fermer"
    },

    navigation: {
      home: "Accueil",
      about: "À propos",
      contact: "Contact"
    },

    showcase: {
      title: "Système linguistique universel EULLIYAN",
      tagline: "Un système linguistique. Plusieurs possibilités."
    }

  };

  if (
    window.EULLIYANS_LANG &&
    typeof window.EULLIYANS_LANG.register === "function"
  ) {
    window.EULLIYANS_LANG.register("fr", french);
  } else {
    console.error(
      "EULLIYAN Language Engine must load before the French dictionary."
    );
  }

})(window);
