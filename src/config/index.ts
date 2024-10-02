import modules from './nuxt-modules'

export default defineNuxtConfig({
    modules,
    compatibilityDate: "2024-04-03",
    debug: false,
    // use when to debug on local
    // vite: {
    //   build: {
    //     minify: false
    //   }
    // },
    // nitro: {
    //   minify: false
    // },
    srcDir: 'src/',
    imports: {
        autoImport: false
    },
    sourcemap: true,
    devtools: {
        enabled: true,
        timeline: {
            enabled: true
        }
    },
    nitro: {
        compressPublicAssets: true
    },
    tailwindcss: {
        cssPath: ['~/src/assets/css/tailwind.scss', { injectPosition: "first" }],
        viewer: false // To disable the viewer during development, set its value to false:
    },
})