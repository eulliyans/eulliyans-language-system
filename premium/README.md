# EULLIYAN'S Language Premium
## Easy Language Expansion
Version: 1.0.0
EULLIYAN'S Language Premium is an optional extension for the EULLIYAN'S Universal Language System.
It helps developers add new languages to their websites without modifying the Core Engine.
## 1. Requirements
Before using the Premium Module, make sure you have:
- EULLIYAN'S Core Engine
- At least one registered language dictionary
- A language dictionary file for each additional language

## 2. Project Structure
```text
your-website/
│
├── eulliyans-language.js
│
├── languages/
│   ├── en.js
│   ├── bn.js
│   └── fr.js
│
└── premium/
    ├── README.md
    ├── config.example.js
    ├── install.html
    ├── language-premium.js
    └── premium-test.html
```
3. Installation

For step-by-step setup instructions, see install.html⁠.

Use config.example.js⁠ as the starting template for Premium configuration.

4. Add a Language Selector

<select id="languageSelector">
  <option value="en">English</option>
</select>

5. Configure Premium

EULLIYANS_PREMIUM.init({
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
});

The Premium Module loads the dictionary, registers the language through the Core Engine, and adds it to the language selector.

6. Create a Language Dictionary

Each language requires its own dictionary file.

Example: languages/fr.js

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
      welcome: "Bienvenue"
    }
  };
  window.EULLIYANS_LANG.register("fr", french);
})(window);

7. RTL and LTR Support

Set the direction in the language configuration.

LTR examples:

* English
* Bengali
* French
* Hindi

RTL examples:

* Arabic
* Urdu

Use:

direction: "ltr"

or:

direction: "rtl"

8. Translation Example

Add a translation key to your HTML:

<p data-i18n="common.welcome">Welcome</p>

When French is selected, the text becomes:

Bienvenue

9. Language Persistence

The Premium Module restores a previously selected language after the dictionaries have loaded.

The default storage key is:

eulliyans_language

10. Error Handling

The Premium Module reports errors when:

* A dictionary file cannot be loaded.
* A language configuration is invalid.
* A dictionary does not register successfully.
* A language is configured more than once.

11. Important Notes

* The Core Engine remains separate from the Premium Module.
* The Premium Module does not replace the Core Engine.
* Existing language dictionaries remain compatible.
* New languages can be added through dictionary files and configuration.
* Developers should verify translation completeness before production use.

12. Testing

A Premium test page is available:

premium/premium-test.html

It can be used to test dictionary loading, language selection, translation, and persistence.

13. Licensing

EULLIYAN’S Universal Language System and its Premium Module are proprietary products of EULLIYAN’S.

Use, modification, distribution, and commercial licensing are subject to the applicable license terms.

For licensing information:

https://eulliyans.github.io/⁠￼

Contact:

eulliyans02@gmail.com

Copyright © EULLIYAN’S. All rights reserved.
