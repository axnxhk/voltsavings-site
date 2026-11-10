import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.evcalculator.online',
  trailingSlash: 'never',
  devToolbar: {
    enabled: false,
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      serialize(item) {
        if (item.url === 'https://www.evcalculator.online/') {
          item.changefreq = 'daily';
          item.priority = 1.0;
          item.lastmod = new Date();
        } else if (item.url.includes('/blog')) {
          item.changefreq = 'weekly';
          item.priority = 0.8;
          item.lastmod = new Date();
        } else {
          item.changefreq = 'monthly';
          item.priority = 0.7;
          item.lastmod = new Date();
        }
        return item;
      }
    })
  ],
});
