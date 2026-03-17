// @ts-check
import {defineConfig} from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://yoroweb.com',
    trailingSlash: 'always',
    adapter: cloudflare({
        imageService: 'compile'
    }),
    integrations: [sitemap()]
});
//todo 2008夏公演ブログの内容あり3チーム分
//todo