// https://nuxt.com/docs/api/configuration/nuxt-config
import config from './src/config/index';

const {
    NUXT_API_BASE_URL
} = process.env

export default defineNuxtConfig({
    ...config,
    runtimeConfig: {
        public: {
            apiBaseUrl: NUXT_API_BASE_URL
        }
    }
});