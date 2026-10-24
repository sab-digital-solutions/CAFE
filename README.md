# CREMA Café & Pâtisserie (demo brand): HTML + CSS + vanilla JS

## Run
Open `index.html`, or run `python3 -m http.server 8000` in this folder and visit http://localhost:8000. Google Fonts need internet; fallbacks are built in.

## What to edit
| What | Where |
|---|---|
| Brand name (EN/AR), phone, WhatsApp, email, social links, form service | `assets/js/branches-data.js` → `SITE` |
| Branches (names, addresses, hours, phones, photos, map) | `assets/js/branches-data.js` → `BRANCHES` |
| Products, prices, descriptions (EN + AR), best sellers | `assets/js/products.js` |
| Page text, buttons, validation messages | `assets/js/translations.js` |
| Colors | `:root` in `assets/css/style.css` (#6F4E37, #CFB59E, #FFFAFA, #B9D9EB) |

Product row format: `[id, category, price or [small, large], [EN name, EN desc], [AR name, AR desc], tag, sizeKey]`.

## Photos (important)
This build ships **no photographs**: photo URLs could not be verified in the build environment, so none were invented. Every image slot shows a styled fallback tile (palette background, emoji and product name). To add photos, either:
1. Save a JPG as `assets/images/<product-id>.jpg` (e.g. `iced-latte.jpg`, `cheesecake.jpg`), or
2. Paste a URL into `IMAGE_URLS` at the top of `products.js`: `"iced-latte": "https://..."`.

Also: `hero.jpg`, `about.jpg`, `branch-city-center.jpg`, `branch-main-street.jpg`. Category cards reuse the first product photo of each category. Use people-free photos, landscape about 1200x900. Free sources: Unsplash, Pexels.

## Maps and directions
Branches are demo data. Set `mapQuery` (real address or "lat,lng") to turn on the live Google Map and the real Get Directions link; until then the button shows a demo notice.

## Contact form
Demo mode: validates, shows a preview message, sends nothing. To send real messages, create a form at Formspree (or similar) and paste its URL into `SITE.formEndpoint`.

## Fictional data to replace before launch
Brand name, prices, ingredient lists, About text, branch names/addresses/hours/phones, email, WhatsApp number, social links.
