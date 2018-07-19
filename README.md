# greenkeeper-website
[![Build Status](https://travis-ci.org/greenkeeperio/website.svg?branch=master)](https://travis-ci.org/greenkeeperio/website)

This is a [harp.js](http://harpjs.com/) project. All assets are automatically compiled by harp, there’s no build pipeline. The site is bilingual, since harp doesn’t explicitly support this, there are some extra things to be aware of, see the Development Guidelines section below. 

⚠️ If you change content, be sure to change it in both languages. This includes navigation and footers.

## Local Development

### Running it locally

To run the server with livereload:

```
npm run server
```

To compile the site into `www/` for looking at the output or serving that statically:

```
npm run build
```

and to serve the previously built version of the site from `www/`:

```
npm start
```

### Development Guidelines

The structure of the site is defined in the two `_data.json` files, one in root for the english site, one in `/de` for the german one. The two versions of the site need their own translated copies of each partial they use, this is why some of the partials are stored in `/en/partials` and `/de/partials`, _as opposed to the content_, which lives in `/` for english and `/de` for german.

Any `.ejs` file that contains text should exist in both languages, except `_customers.ejs`, where the only text is company names that don’t need to be translated. This means that each language has its own `_header.ejs` and `_footr.ejs` partial, so if you change the navigation, you have to change that twice, too.

The `_data.json` files define which pages get rendered under which URL, and can define some vars for use in that page, take, for example, the german FAQ page entry:

```json
  "haeufige-fragen": {
    "pageTitle": "Häufig gestellte Fragen",
    "bodyClass": "faq gk-saas",
    "locale": "de",
    "otherLanguageURL": "/faq"
  },
```
- `pageTitle` is used in `_layout.js`, which is the generic container template for all other templates.
- `bodyClass` is the same. These two are variables because `<head>` and `<body>` live in `_layout.js` and not in the individual templates.
- `locale` is the local shortcode for the language that page is in. This is super redundant, but also the path of least resistance.
- `otherLanguageURL` is the url of the same page in the other language. There is probably a super-elaborate way to do this programmatically, but since we only ever want to support two languages, this is fine 🐶🔥 for now. This is the URL that gets used in each languages’s `_header.ejs` partial to render the language switching link. If we had identical URLs for both languages, we wouldn’t need this, but it’s more consistent this way.

⚠️ If one of these is missing or wrong, the corresponding page won’t render, so please check each page you’ve changed the data for.

⚠️ **All URLS must be absolute** ☝️

ℹ️ There’s some UI text inside CSS pseudo elements that we can’t translate, for the image enlarge on tap, for example.

## Deployment

Just merge to master 👍

This runs travis, which runs `deploy.js`, which publishes a newly-built version of `www` to the `gh-pages` branch on GitHub.
