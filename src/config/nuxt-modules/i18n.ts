import '@nuxtjs/i18n'
import type { NuxtConfig } from 'nuxt/config';

const locales = [
    {
        code: 'en',
        iso: 'en',
        file: 'en.json'
    }
]

export const i18nOptions: NuxtConfig['i18n'] = {
    langDir: 'locales/',
    defaultLocale: 'en',
    locales,
    skipSettingLocaleOnNavigate: false,
    types: 'composition',
    strategy: 'prefix_except_default',
    debug: false,
    vueI18n: 'src/locales/vueI18n.ts',
    lazy: false,
}

export const [i18n]: NuxtConfig['modules'] = [['@nuxtjs/i18n', i18nOptions]]