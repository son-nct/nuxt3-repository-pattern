import type { NuxtConfig } from '@nuxt/schema';
import { i18n } from './i18n';

export default [
    i18n,
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@pinia/nuxt'
] as NuxtConfig['modules'];