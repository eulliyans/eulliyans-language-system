
# EULLIYAN’S Universal Language System

**A reusable multilingual language engine for modern websites.**

Version: 1.1.0  
Owner: EULLIYAN’S  
Contact: eulliyans02@gmail.com

## 1. Overview

EULLIYAN’S Universal Language System is a reusable JavaScript language engine that helps developers add multilingual support to websites.

It uses language dictionaries to translate website text, supports RTL/LTR text direction, and remembers the visitor's selected language.

### Supported Languages

- English (en) — LTR
- Bengali (bn) — LTR
- Arabic (ar) — RTL
- Hindi (hi) — LTR
- Urdu (ur) — RTL

## 2. Live Demos

- Main Demo: https://eulliyans.github.io/eulliyans-language-system/demo.html
- Client Integration Test: https://eulliyans.github.io/eulliyans-language-system/client-test.html
- Showcase: https://eulliyans.github.io/eulliyans-language-system/showcase.html

## 3. Project Files

- `eulliyans-language.js` — Core Language Engine.
- `languages/en.js` — English dictionary.
- `languages/bn.js` — Bengali dictionary.
- `languages/ar.js` — Arabic dictionary.
- `languages/hi.js` — Hindi dictionary.
- `languages/ur.js` — Urdu dictionary.

## 4. Integration Guide

### Step 1 — Add the Core Engine

Add the authorized `eulliyans-language.js` Core Engine file to your website project according to your license.

### Step 2 — Add Language Dictionaries

Add the required language dictionary files and maintain the `languages` folder structure.

### Step 3 — Load Scripts in the Correct Order

Load the Core Engine before loading the language dictionaries.

Add the scripts before the closing `</body>` tag:

```html
<script src="eulliyans-language.js"></script>
<script src="languages/en.js"></script>
<script src="languages/bn.js"></script>
<script src="languages/ar.js"></script>
<script src="languages/hi.js"></script>
<script src="languages/ur.js"></script>
```

Adjust file paths if your folder structure is different.

### Step 4 — Add Translation Keys

Use the `data-i18n` attribute to identify text that should be translated.

```html
<h1 data-i18n="common.welcome">Welcome</h1>

<p data-i18n="messages.welcome">
  Welcome to our website!
</p>

<a data-i18n="navigation.contact">Contact Us</a>
```

Make sure the corresponding translation keys exist in the loaded dictionaries.

### Step 5 — Initialize the Engine

Initialize the engine after loading the Core Engine and dictionaries.

```html
<script>
  EULLIYANS_LANG.init({
    defaultLanguage: "en",
    fallbackLanguage: "en",
    storageKey: "my_website_language"
  });
</script>
```

Use a unique storage key for each website.

### Step 6 — Add a Language Selector

```html
<select id="languageSelector">
  <option value="en">English</option>
  <option value="bn">বাংলা</option>
  <option value="ar">العربية</option>
  <option value="hi">हिन्दी</option>
  <option value="ur">اردو</option>
</select>

<script>
  const selector = document.getElementById("languageSelector");

  selector.value = EULLIYANS_LANG.getLanguage();

  selector.addEventListener("change", function () {
    EULLIYANS_LANG.setLanguage(this.value);
  });
</script>
```

## 5. RTL and LTR Support

The engine updates the document language and text direction when a language is selected.

- English, Bengali and Hindi use LTR.
- Arabic and Urdu use RTL.

Developers should also ensure that their website CSS supports RTL layouts where necessary.

## 6. Customization

Website developers can configure:

- Enabled languages.
- Default language.
- Language selector appearance.
- Translation dictionary text.
- Website-specific translation keys.

Keep translation keys consistent across all enabled language dictionaries.

## 7. Testing Checklist

Before publishing an integrated website, verify:

- Core Engine loads successfully.
- Required language dictionaries register successfully.
- Language selection updates website translations.
- Arabic and Urdu use RTL.
- Other supported languages use LTR.
- Selected language remains saved after reload.
- No required translation keys are missing.

## 8. Licensing and Ownership

EULLIYAN’S retains ownership of the Universal Language System Core Engine.

Commercial use, client website integration, developer and agency licensing, and Premium features are governed by the applicable license agreement.

Read the applicable license documents:

- `LICENSE-CLIENT.md`
- `LICENSE-DEVELOPER.md`
- `LICENSE-PREMIUM.md`

The Core Engine must not be extracted, resold, redistributed, sublicensed, published, or distributed as a separate product without prior written authorization from EULLIYAN’S.

Permitted integrated website delivery is subject to the applicable license terms.

No ownership of the Core Engine is transferred.

## 9. Support and Licensing Contact

For licensing, commercial use, integration support, or other inquiries:

**EULLIYAN’S**  
Email: eulliyans02@gmail.com

---

Copyright © EULLIYAN’S. All rights reserved.
