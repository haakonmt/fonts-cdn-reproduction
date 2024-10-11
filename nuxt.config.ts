// https://nuxt.com/docs/api/configuration/nuxt-config
import * as fs from "node:fs/promises";

const CDN_SUBDIRECTORY = 'static'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts'],
  app: {
    cdnURL: `http://localhost:3000/${CDN_SUBDIRECTORY}`,
  },
  nitro: {
    publicAssets: [
      {
        baseURL: CDN_SUBDIRECTORY,
        dir: `public/${CDN_SUBDIRECTORY}`,
      }
    ]
  },
  hooks: {
    // Simulate serving assets from a CDN by moving them to a subdirectory
    "nitro:build:public-assets": async (publicAssets) => {
      const dir = publicAssets.options.output.publicDir
      await fs.mkdir(`${dir}/${CDN_SUBDIRECTORY}`)
      await Promise.all([
        fs.rename(`${dir}/_nuxt`, `${dir}/${CDN_SUBDIRECTORY}/_nuxt`),
        fs.rename(`${dir}/_fonts`, `${dir}/${CDN_SUBDIRECTORY}/_fonts`),
      ])
    }
  }
})
