import { defineI18nConfig } from '#imports'
import en from './en.json'
import type { LocaleMessages, VueMessageType } from 'vue-i18n'
const enMessages: LocaleMessages<VueMessageType> = en as LocaleMessages<VueMessageType>;

export const messages: { [key: string]: LocaleMessages<VueMessageType> } = {
  en: enMessages
}

export default defineI18nConfig(() => ({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
  missingWarn: false,
  fallbackWarn: false,
  silentFallbackWarn: true,
  messages
}))
