import presetRemToPx from '@unocss/preset-rem-to-px'
import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'
// https://github.com/unocss/unocss

export const createConfig = () => {
  return defineConfig({
    mode: 'vue-scoped',
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons({
        prefix: '',
        extraProperties: {
          display: 'inline-block',
          cursor: 'pointer',
          'font-size': '20px',
        },
      }),
      presetRemToPx({
        baseFontSize: 4,
      }),
    ],
    include: [/\.vue$/],
  })
}

export default createConfig()
