import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import htmlPlugin from 'vite-plugin-html-config';
import svgr from 'vite-plugin-svgr';

const title = '轉生遇眷你 See You There - 2023 新北市眷村文化節';
const description =
  '邀請你一起轉生進入奇幻的大新北異世界新手村，穿梭於不同年代，遇到來自四面八方的人，沈浸在不同時空的歌舞故事中，一起體驗眷村的療癒生活，還有村外的文化冒險。';
const htmlPluginOpt = {
  title,
  favicon: '/favicon.svg',
  metas: [
    { name: 'title', content: title },
    { name: 'description', content: description },
    { name: 'keywords', content: '2023 新北市眷村文化節, 轉生遇眷你' },
    { name: 'og:title', content: title },
    { name: 'og:site_name', content: title },
    { name: 'og:url', content: 'https://seeyouinvillage-ntpc.xyz/' },
    { name: 'og:description', content: description },
    { name: 'og:type', content: 'website' },
    { name: 'og:image', content: 'https://2023-military-dependent-village-festi.netlify.app/og-image.jpg' }
  ]
};

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        dimensions: false,
        svgoConfig: {
          removeViewBox: false,
          removeDimensions: true
        }
      }
    }),
    htmlPlugin(htmlPluginOpt)
  ]
});
