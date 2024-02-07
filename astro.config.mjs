import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://franswap.github.io',
    base: '/portofolio',
    routes: [
        { path: '/work/:slug', component: 'src/pages/WorkDetail.astro' },
      ],
});
