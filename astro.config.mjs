// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

const rawSiteUrl = process.env.PUBLIC_SITE_URL?.trim();
const siteUrl = rawSiteUrl ? normalizeSiteUrl(rawSiteUrl) : undefined;

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  integrations: [mdx(), ...(siteUrl ? [sitemap()] : []), react()],
  vite: {
    plugins: [tailwindcss()]
  }
});

/**
 * @param {string} url
 */
function normalizeSiteUrl(url) {
  return url.endsWith('/') ? url : `${url}/`;
}
