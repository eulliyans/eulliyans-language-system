
# EULLIYAN’S Universal Language System

**A reusable multilingual language engine for modern websites.**

Version: 1.0.0  
Owner: EULLIYAN’S  
Contact: eulliyans02@gmail.com

## 1. Overview

EULLIYAN’S Universal Language System helps website developers add multilingual support with language dictionaries, automatic text translation, RTL/LTR direction support, and saved language preferences.

Supported languages:
- English (en) — LTR
- Bengali (bn) — LTR
- Arabic (ar) — RTL
- Hindi (hi) — LTR
- Urdu (ur) — RTL

## 2. Live Demo

Demo: https://eulliyans.github.io/eulliyans-language-system/demo.html

Client Integration Test:
https://eulliyans.github.io/eulliyans-language-system/client-test.html

## 3. Project Files

- `eulliyans-language.js` — Core language engine.
- `client-config.js` — Client website configuration.
- `languages/en.js` — English dictionary.
- `languages/bn.js` — Bengali dictionary.
- `languages/ar.js` — Arabic dictionary.
- `languages/hi.js` — Hindi dictionary.
- `languages/ur.js` — Urdu dictionary.

## 4. Integration Guide

### Step 1 — Add the Engine

Copy `eulliyans-language.js` into your website project.

### Step 2 — Add Language Dictionaries

Copy the required language dictionary files and the `languages` folder into your project.

### Step 3 — Load Scripts in Correct Order

Add these scripts before the closing `</body>` tag. The engine must load before the dictionaries.

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

Use dictionary keys with `data-i18n`:

```html
<h1 data-i18n="common.welcome">Welcome</h1>
<p data-i18n="messages.welcome">Welcome to our website!</p>
<a data-i18n="navigation.contact">Contact Us</a>
```

The translation keys must exist in the loaded dictionaries.

### Step 5 — Initialize the Engine

After loading the engine and dictionaries, initialize it:

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

Your website CSS should also support RTL layouts where needed.

## 6. Customization

Website owners can customize:
- Enabled languages.
- Default language.
- Language selector appearance.
- Translation dictionary text.
- Website-specific translation keys.

Keep dictionary keys consistent across all enabled languages.

## 7. Testing Checklist

Before publishing, verify:

- Engine loads successfully.
- All required dictionaries register.
- Language selection changes translations.
- Arabic and Urdu use RTL.
- Other supported languages use LTR.
- Selected language remains after reload.
- No missing translation keys appear.

## 8. Licensing

EULLIYAN’S retains ownership of the Universal Language System Core Engine.

Commercial use, client delivery, developer and agency licensing, and Premium features are governed by the applicable license agreement.

Read the license documents:
- `LICENSE-CLIENT.md`
- `LICENSE-DEVELOPER.md`
- `LICENSE-PREMIUM.md`

Do not resell, redistribute, or publish the Core Engine as a standalone product without written authorization.

## 9. Support and Licensing Contact

For licensing, commercial use, integration support, or other inquiries:

**EULLIYAN’S**  
Email: eulliyans02@gmail.com

---

Copyright © EULLIYAN’S. All rights reserved.
