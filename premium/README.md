
# EULLIYAN'S Language Premium

## Easy Language Expansion

**Version:** 1.0.0  
**Product:** EULLIYAN'S Universal Language System

EULLIYAN'S Language Premium is an optional extension for the EULLIYAN'S Universal Language System.

It allows developers to add additional website languages without modifying the Core Engine.

## 1. Requirements

Before installing the Premium Module, make sure you have:

- EULLIYAN'S Universal Language Core Engine.
- At least one registered language dictionary.
- A dictionary file for every additional language.
- A valid Premium License where required.

**Note:** English, Bengali, Arabic, Hindi, Urdu and French are already included in the Core Language System.

## 2. Project Structure

Example website structure:

```text
your-website/
│
├── eulliyans-language.js
│
├── languages/
│   ├── en.js
│   ├── bn.js
│   └── es.js
│
└── premium/
    ├── language-premium.js
    └── config.example.js
```

The `es.js` file represents an additional language dictionary supplied by the developer.

## 3. Installation

1. Add the authorized Core Engine to your website.
2. Load your existing Core language dictionaries.
3. Initialize the Core Engine.
4. Load the Premium Module.
5. Configure the additional languages.

For detailed installation instructions, see:

`install.html`

For configuration examples, see:

`config.example.js`

## 4. Add a Language Selector

Add a language selector to your website:

```html
<select id="languageSelector">
  <option value="en">English</option>
  <option value="bn">বাংলা</option>
</select>
```

The Premium Module can add configured languages to this selector.

## 5. Configure Premium

Example configuration for an additional Spanish language:

```javascript
EULLIYANS_PREMIUM.init({
  selector: "#languageSelector",
  languages: [
    {
      code: "es",
      name: "Spanish",
      nativeName: "Español",
      file: "languages/es.js",
      direction: "ltr"
    }
  ]
});
```

The Premium Module:

- Loads the configured dictionary.
- Checks whether the dictionary registered successfully.
- Adds the language to the selector.
- Supports language direction settings.
- Restores a previously saved language when available.

## 6. Create a Language Dictionary

Each additional language requires its own dictionary file.

Example: `languages/es.js`

```javascript
(function (window) {
  "use strict";

  const spanish = {
    meta: {
      code: "es",
      name: "Spanish",
      nativeName: "Español",
      direction: "ltr"
    },

    common: {
      welcome: "Bienvenido"
    }
  };

  window.EULLIYANS_LANG.register("es", spanish);

})(window);
```

Make sure the dictionary uses the same language code as the Premium configuration.

## 7. RTL and LTR Support

Set the appropriate direction in the language configuration.

**LTR examples:**
- English
- Bengali
- French
- Hindi
- Spanish

**RTL examples:**
- Arabic
- Urdu

Use:

```javascript
direction: "ltr"
```

or:

```javascript
direction: "rtl"
```

Your website CSS should also support RTL layouts where necessary.

## 8. Translation Example

Add a translation key to your HTML:

```html
<p data-i18n="common.welcome">Welcome</p>
```

When the corresponding Spanish dictionary is loaded and Spanish is selected, the translated text becomes:

**Bienvenido**

Make sure the required translation keys exist in the dictionary.

## 9. Language Persistence

The Premium Module attempts to restore a previously selected language after the configured dictionaries have loaded.

The default storage key is:

```text
eulliyans_language
```

Developers can configure a different storage key when initializing the Premium Module.

Use a unique storage key for each website.

## 10. Error Handling

The Premium Module reports errors when:

- A dictionary file cannot be loaded.
- A language configuration is invalid.
- A dictionary does not register successfully.
- A language is configured more than once.

Developers should check the browser console when troubleshooting loading errors.

## 11. Important Notes

- The Core Engine remains separate from the Premium Module.
- The Premium Module does not replace the Core Engine.
- Existing Core language dictionaries remain compatible.
- Additional languages require their own dictionary files.
- Language codes must match between configuration and dictionaries.
- Developers should verify translation completeness before production use.

## 12. Testing

A Premium test page is available:

`premium/premium-test.html`

Use it to test:

- Premium Module loading.
- Dictionary loading.
- Language registration.
- Language selection.
- Translation output.
- Language persistence.
- Error handling.

## 13. Licensing

EULLIYAN'S Universal Language System and its Premium Module are proprietary products of EULLIYAN'S.

Use, modification, distribution and commercial licensing are subject to the applicable license terms.

For licensing information, visit:

https://eulliyans.github.io/eulliyans-language-system/

**Contact:**  
EULLIYAN'S  
Email: eulliyans02@gmail.com

---

Copyright © EULLIYAN'S. All rights reserved.
