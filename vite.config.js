import { fileURLToPath, URL } from 'node:url'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import legacy from '@vitejs/plugin-legacy'
import { createHtmlPlugin } from 'vite-plugin-html'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    legacy({
      targets: ['Android >= 4.4', 'not IE 11'],
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ['vue', 'vue-router', 'pinia'],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: 'readonly', // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      dts: false,
      resolvers: [ArcoResolver()],
    }),
    Components({
      // 指定组件位置，默认是src/components
      dirs: ['src/components', 'src/view'],
      // ui库解析器
      resolvers: [ArcoResolver({ sideEffect: true }), VantResolver()],
      extensions: ['vue'],
    }),
    Unocss({
      rules: [
        [
          /^u-line-(\d)$/,
          ([, d]) => ({
            '-webkit-line-clamp': d,
            overflow: 'hidden',
            'word-break': 'break-all',
            'text-overflow': 'ellipsis',
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
          }),
        ],
      ],
    }),
    createHtmlPlugin({
      inject: {
        data: {
          injectScript: `
  <script>
  document.write("<script type='text/javascript' src='./config.js?v=" + Date.now() + "'><\\/script>");
  </script>
  `,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('css')
      .test(/\.css$/)
      .oneOf('vue')
      .resourceQuery(/\?vue/)
      .use('px2rem')
      .loader('px2rem-loader')
      .options({
        remUnit: 192, //稿子宽度的1/10，此处我的项目为1920，根据实际情况修改
      })
  },
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       modifyVars: {
  //         '--primary-6': '#fff',
  //       },
  //     },
  //   },
  // },
  server: {
    open: true,
    fs: {
      strict: true,
    },
    proxy: {
      '/api': {
        target: 'https://tourismbackenddev.pcleartv.cn/',
        // target: 'https://tourismbackend.pcleartv.cn/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/ticket': {
        target: 'http://218.92.173.186:100',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ticket/, ''),
      },
      '/zk': {
        target: 'http://223.113.71.94:8001/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/zk/, ''),
      },
    },
  },
})
