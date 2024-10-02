import { defineNuxtPlugin, useRuntimeConfig } from '#app';
import { $fetch, type FetchOptions } from 'ofetch';

import ProductsModule from '~/repository/modules/demo';

interface IApiInstance {
    products: ProductsModule
}

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    const { apiBaseUrl } = config.public;

    const fetchOptions: FetchOptions = {
        baseURL: apiBaseUrl as string
    }

    // Create a new instance of $fecther with custom option
    const apiFetcher = $fetch.create(fetchOptions);

    // An object containing all repository we need to expose

    const modules: IApiInstance = {
        products: new ProductsModule(apiFetcher)
    }

    return {
        provide: {
            api: modules
        }
    }
})

