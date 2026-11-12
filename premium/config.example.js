/*!
 * EULLIYAN'S Premium Configuration Template
 * Version: 1.0.0
 */

(function (window) {
  "use strict";

  const premium = window.EULLIYANS_PREMIUM;

  if (!premium) {
    console.error(
      "EULLIYAN'S Premium Module not found."
    );
    return;
  }

  premium.init({
    selector: "#languageSelector",

    languages: [
      {
        code: "fr",
        name: "French",
        nativeName: "Français",
        file: "languages/fr.js",
        direction: "ltr"
      }
    ]

  }).then(function (results) {

    const failed = results.filter(
      result => result.status === "rejected"
    );

    if (failed.length > 0) {
      console.error(
        "Some Premium languages failed to load:",
        failed
      );
    } else {
      console.log(
        "EULLIYAN'S Premium initialized successfully."
      );
    }

  });

})(window);
