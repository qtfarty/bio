# Project overview
A customized version of “Glitch in Bio” with a simple bilingual setup (English and Japanese).

## Origin
Based on the original remix: https://glitch.com/~alexlinks

## What’s customized here
- Multilingual content sourced from `settings.json` using nested keys: `{ en, ja }`.
- Two static entry pages:
  - English (default): `/` → `src/index.html`
  - Japanese: `/ja/` → `src/ja/index.html`
- Language switch: a footer link toggles between `/` and `/ja/`.
- Shared layout partials remain in `layout/` (avatar, social, etc.). Only head metadata is duplicated for JA (`layout/head-ja.html`).

## How to customize
- Edit `settings.json`:
  - `name.en` / `name.ja`
  - `pronoun.en` / `pronoun.ja` (HTML allowed)
  - `description.en` / `description.ja`
  - `links.en[]` / `links.ja[]` (each item: `{ url, text, wb, img }`)
  - `theme`: `glitch`, `gallery`, `menu`, or your own
- Styles: update `/public/styles/style.css` or add a custom theme in `/public/styles/themes/` and set its name in `settings.json`.

## Related Services

This site uses a Cloudflare Worker for automatic language-based redirection:

- [Language Redirector Worker](https://github.com/qtfarty/bio-lang-switcher)

The Worker detects the visitor’s browser language and (once per day) redirects Japanese users to `/ja/`.  
See the Worker repository above for details.

# Original Glitch in Bio Read me

Your links, your way. A link-in-bio app you can customize any way you want.

🚀 **TL;DR Remix and edit `settings.json` to add your own links!** 🚀

### Working with Glitch in Bio

To get started, open `settings.json` and add your name, avatar, social accounts, and links. Your changes will all be reflected instantly. 

To help you make the site your own we've included some themes. In `settings.json` you can enter `glitch`, `gallery`, or `menu` as the value for `theme`. Use any theme you want, add a new one, or start with one and edit it to make it your own. _If you don't have a valid theme entered, the site will default to the styles outlined in `style.css`._

* The images you add in `settings.json` as the `img` property for each link will display if you use the `gallery` or `menu` themes. Upload yours in `assets` and copy the link from there if they aren't already online.
* If you notice your preview is a little out of sync with your `settings.json`, hit the reload button in the preview window and it should update!

__To get started changing the appearance of your site, or building your own theme, use `custom-theme.css` to set global variables like colors and fonts, and add any rules you like. Make sure you enter your theme by name in `settings.json` as the `theme` property (`custom-theme` or change the filename if you like, just remember to update it in your settings JSON).__

In `index.html` you'll see where the theme is applied to the page at the first comment, which starts with `<!--- THEMES:`. We've also included a few `<!--- NEXT STEPS: ` comments in the HTML that show things like adding a bio paragraph or embedding a YouTube video. **For more HTML learning try out [Hello Website](https://glitch.com/~glitch-hello-website).**

___The images in the default settings.json file are from a remix of [Generative Placeholders](https://glitch.com/~generative-placeholders) by [@stefan](https://glitch.com/@stefan).___ 🖼️🪅✨


## What's in this project?

← `README.md`: That’s this file. You can delete it, or keep it handy so you don't lose the instructions.

← `index.html`: This is the main page template vite uses to build your site. You'll see the handlebars syntax for importing the data you specify in `settings.json` (built into the structures in `layout/`). You'll also find some tips on configuring the page in the HTML comments.

← `settings.json`: Settings for your name, links, images, and social media. The `index.html` page includes the data using the structures defined in `layout/`.

← `layout/`: Markup templates — you can edit every line of HTML or never even look at any of it. The data you specify in `settings.json` will be built into the page using the HTML in here using handlebars syntax (e.g. `{{settings.name}}`).

← `public/styles/`: Stylesheets for Glitch in Bio, including alternate themes. Change your theme in `settings.json`. You can create a new theme by adding a CSS file to this folder and specifying it using its name in the settings (e.g. `glitch`, `gallery`, `menu`, or whatever yours is called!)

← `public/manifest.json` and `public/sw.js`: These set your site up to function as a Progressive Web App (PWA)–if you add new assets (e.g. stylesheets) you can include them in the list in `sw.js` to cache your site for offline viewing.

← `assets`: Add images here and copy the links into `settings.json` to show them in your site.

![Glitch](https://cdn.glitch.com/a9975ea6-8949-4bab-addb-8a95021dc2da%2FLogo_Color.svg?v=1602781328576)

## You built this with Glitch!

[Glitch](https://glitch.com) is a friendly community where millions of people come together to build web apps and websites.

- Need more help? [Check out our Help Center](https://help.glitch.com/) for answers to any common questions.
- Ready to make it official? [Become a paid Glitch member](https://glitch.com/pricing) to boost your app with private sharing, more storage and memory, domains and more.
