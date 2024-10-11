# `@nuxt/fonts` cdnURL bug reproduction

This repo is a reproduction of [this bug](https://github.com/nuxt/fonts/issues/224).

1. Clone this repo
2. Run `npm install`
3. Run `npm serve:clean`
4. Observe that JS/CSS works, and that network requests for those assets are made to `<root>/static/_nuxt/*`, but custom fonts _do not_ work, and the font requests are made to `<root>/_fonts/*`
5. Run `npm serve:cached`
6. Observe that JS/CSS still works, but customs fonts also work, and font requests are now hitting the correct URL, `<root>/static/_fonts/*`