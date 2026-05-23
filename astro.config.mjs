import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  srcDir: './src',
  publicDir: './public',
  integrations: [icon()]
});
